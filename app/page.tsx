import { LoginSessionHandler } from "./entrar/login-session-handler";

export default function LandingPage() {
  const stripePaymentLink = "https://buy.stripe.com/bJeeVddeP6LH5uXcsidjO00";

  return (
    <main className="landing">
      <LoginSessionHandler />
      <section className="landing-hero" aria-label="Agenda Ativa Wedding Planner">
        <div className="landing-hero-desktop">
          <img
            className="landing-hero-art"
            src="/hero_agenda_ativa_wedding_v10_5_left_hierarchy.png"
            alt="Agenda Ativa Wedding Planner"
          />
          <a className="landing-hero-cta" href={stripePaymentLink} aria-label="Quero a minha Agenda Ativa" />
        </div>

        <div className="landing-hero-mobile">
          <div className="landing-mobile-brand">
            <div className="landing-mobile-logo">AGENDA ATIVA™</div>
            <div className="landing-mobile-edition"><span />Edição Wedding Planner<span /></div>
          </div>

          <picture>
            <source media="(max-width: 520px)" srcSet="/hero-mobile-photo-v10-4-scene.png" />
            <source media="(max-width: 900px)" srcSet="/hero-tablet-photo-v10-4-scene.png" />
            <img
              className="landing-mobile-photo"
              src="/wedding_hero_photo_v10_4.png"
              alt="Wedding planner em reunião com casal"
            />
          </picture>

          <div className="landing-mobile-copy">
            <h1>
              Continue focada
              <br />
              nos noivos.
              <em>
                O Instagram
                <br />
                continua ativo.
              </em>
            </h1>

            <p>
              Mais tempo para os seus noivos.
              <strong>Menos tempo a pensar no Instagram.</strong>
            </p>

            <div className="landing-mobile-mantra">Abra. Copie. Publique.</div>

            <div className="landing-mobile-price">
              <strong>97€</strong>
              <span>
                <b>Pagamento único</b>
                Sem mensalidades.
                <br />
                Sem subscrições.
                <br />
                Acesso imediato.
              </span>
            </div>

            <a className="landing-cta landing-mobile-cta" href={stripePaymentLink}>
              QUERO A MINHA AGENDA ATIVA™
            </a>
          </div>
        </div>
      </section>

      <section className="landing-strip">
        <div className="landing-strip-title">
          O Instagram não pode parar.
          <br />
          <em>Mesmo quando está ocupada a organizar casamentos.</em>
        </div>
        <div className="landing-strip-icons">
          <div><span>01</span>Tempo recuperado</div>
          <div><span>02</span>Consistência sem esforço</div>
          <div><span>03</span>Pronto a publicar</div>
        </div>
      </section>

      <section className="landing-section">
        <h2>Três passos.<em>Zero complicação.</em></h2>
        <div className="steps-flow">
          <div className="step"><div className="step-num">1</div><h3>Escolha o dia</h3><p>Abra a Agenda Ativa™ e veja o conteúdo pronto para hoje.</p></div>
          <div className="arrow">→</div>
          <div className="step"><div className="step-num">2</div><h3>Copie</h3><p>Copie a legenda e o call to action num só clique.</p></div>
          <div className="arrow">→</div>
          <div className="step"><div className="step-num">3</div><h3>Publique</h3><p>Cole no Instagram e mantenha a presença ativa.</p></div>
        </div>
      </section>

      <section className="landing-preview">
        <div className="preview-title">Uma única decisão:<br /><em>publicar o conteúdo que já está pronto.</em></div>
        <div className="preview-card">
          <small>Hoje · Dia 12</small>
          <p>3 erros que os noivos cometem ao escolher o venue.</p>
          <div className="mini-copy">Copiar</div>
        </div>
      </section>

      <section className="landing-section landing-receive">
        <div className="receive-grid">
          <h2>O que recebe</h2>
          <div className="receive-list">
            <div><span>✓</span>30 dias de conteúdo prontos a publicar</div>
            <div><span>✓</span>Legendas preparadas</div>
            <div><span>✓</span>Call to action incluída</div>
            <div><span>✓</span>Menos de 5 minutos por dia</div>
            <div><span>✓</span>Acesso imediato</div>
          </div>
        </div>
      </section>

      <section className="landing-authority">
        <h2>Criado para profissionais cuja prioridade não é o Instagram.</h2>
        <p>Para quem precisa de presença consistente sem transformar o conteúdo em mais uma tarefa pesada.</p>
      </section>

      <section className="landing-emotion">
        <h2>Não está a comprar conteúdo.<em>Está a recuperar tempo.</em></h2>
        <p>Enquanto acompanha noivos, gere fornecedores e prepara eventos, a Agenda Ativa™ mantém a sua presença online ativa sem lhe roubar tempo nem energia mental.</p>
      </section>

      <section className="landing-objection">
        <div>
          <h2>E se outras wedding planners comprarem?<em>O seu conteúdo continua único.</em></h2>
          <p>A Agenda Ativa™ fornece a ideia e a estrutura. A identidade final vem sempre do seu trabalho real.</p>
        </div>
        <ul>
          <li>As fotografias continuam a ser suas.</li>
          <li>Os vídeos continuam a ser seus.</li>
          <li>Os casamentos continuam a ser seus.</li>
          <li>A sua marca continua a ser sua.</li>
        </ul>
      </section>

      <section className="price-section" id="comprar">
        <h2>Pronta para ter o Instagram sob controlo?</h2>
        <p>Pagamento único. Sem mensalidades. Sem subscrições. Acesso imediato.</p>
        <div className="price-card">
          <div className="price">97€</div>
          <p>30 dias de conteúdo prontos a publicar.</p>
          <p>Pagamento único. Sem mensalidades. Sem subscrições. Acesso imediato.</p>
          <a className="landing-cta" href={stripePaymentLink}>QUERO A MINHA AGENDA ATIVA™ →</a>
        </div>
      </section>

      <section className="landing-final">
        <p>Continue focada nos noivos. O Instagram continua ativo.</p>
        <a className="landing-cta" href={stripePaymentLink}>QUERO A MINHA AGENDA ATIVA™ →</a>
      </section>
    </main>
  );
}
