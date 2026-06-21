import { redirect } from "next/navigation";
import { CopyButton } from "../copy-button";
import { getCurrentDay, getUpcomingDays } from "@/lib/progress";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { DailyContent, UserAccess } from "@/lib/types";

export const dynamic = "force-dynamic";

const fallbackContent: DailyContent = {
  id: 1,
  day: 1,
  title: "Como escolher o fotografo ideal para o seu casamento sem arrependimentos",
  body: [
    "Escolher o fotografo do casamento nao e apenas escolher imagens bonitas. E escolher a pessoa que vai guardar a memoria de um dos dias mais importantes da sua vida.",
    "Antes de decidir, veja portfolios completos, confirme se o estilo combina convosco e perceba como o profissional conduz os momentos mais delicados do dia.",
    "A melhor escolha e aquela que vos deixa tranquilos antes, durante e depois do casamento."
  ].join("\n\n"),
  cta: "Guarde este post para quando comecar a procurar fornecedores."
};

export default async function ProductPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user?.email) {
    redirect("/entrar");
  }

  const { data: access } = await supabase
    .from("users")
    .select("id,email,first_name,purchase_date,created_at")
    .eq("email", user.email.toLowerCase())
    .maybeSingle();

  const userAccess = access as UserAccess | null;

  if (!userAccess?.purchase_date) {
    redirect("/entrar?estado=erro");
  }

  const currentDay = getCurrentDay(userAccess.purchase_date);
  const { data: content } = await supabase
    .from("content")
    .select("id,day,title,body,cta")
    .eq("day", currentDay)
    .maybeSingle();

  const dailyContent = (content as DailyContent | null) || fallbackContent;
  const upcomingDays = getUpcomingDays(currentDay);
  const firstName = userAccess.first_name?.trim();

  return (
    <main className="page">
      <header>
        <div>
          <div className="brand">AGENDA ATIVA™</div>
          <div className="edition">Wedding Planner Edition</div>
        </div>
        <div className="date-mark">
          <strong>Dia {currentDay}</strong>
          Dia {currentDay} de 30
        </div>
      </header>

      <section className="hero-message" aria-label="Mensagem principal">
        {firstName ? <p>{firstName},</p> : null}
        <h1>Hoje ja esta tratado.</h1>
      </section>

      <section className="agenda" aria-label="Agenda do dia">
        <article className="today">
          <div className="day-label">Dia {currentDay} de 30</div>
          <div className="progress-note">
            O conteudo e desbloqueado dia apos dia para manter a sua presenca ativa sem decisoes.
          </div>
          <h2 className="post-title">{dailyContent.title}</h2>

          <div className="section-label">Legenda pronta</div>
          <div className="copy-block">
            {dailyContent.body.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="section-label">CTA</div>
          <div className="cta-copy">{dailyContent.cta}</div>

          <div className="time">Tempo estimado: 3 minutos</div>
          <CopyButton title={dailyContent.title} body={dailyContent.body} cta={dailyContent.cta} />
        </article>

        <aside className="upcoming" aria-label="Proximos dias">
          <div className="next-title">Proximos dias</div>
          {upcomingDays.map((item) => (
            <div className="locked-day" key={item.day}>
              <strong>
                Dia {item.day} <span>bloqueado</span>
              </strong>
              <span>{item.label}</span>
            </div>
          ))}
          <div className="note">Abra. Copie. Publique. E volte ao que realmente precisa da sua atencao.</div>
        </aside>
      </section>
    </main>
  );
}
