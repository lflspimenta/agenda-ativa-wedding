export default function LandingPage() {
  const stripePaymentLink = "https://buy.stripe.com/bJeeVddeP6LH5uXcsidjO00";

  return (
    <main className="landing">
      <section className="landing-hero" aria-label="Agenda Ativa Wedding Planner">
        <img
          className="landing-hero-art"
          src="/hero_agenda_ativa_wedding_v10_5_left_hierarchy.png"
          alt="Agenda Ativa Wedding Planner"
        />
        <a className="landing-hero-cta" href={stripePaymentLink} aria-label="Quero a minha Agenda Ativa" />
      </section>

      <section className="landing-strip">
        <div className="landing-strip-title">
          O Instagram nao pode parar.
          <br />
          <em>Mesmo quando esta ocupada a organizar casamentos.</em>
        </div>
        <div className="landing-strip-icons">
          <div><span>01</span>Tempo recuperado</div>
          <div><span>02</span>Consistencia sem esforco</div>
          <div><span>03</span>Pronto a publicar</div>
        </div>
      </section>

      <section className="landing-section">
        <h2>Tres passos.<em>Zero complicacao.</em></h2>
        <div className="steps-flow">
          <div className="step"><div className="step-num">1</div><h3>Escolha o dia</h3><p>Abra a Agenda Ativa™ e veja o conteudo pronto para hoje.</p></div>
          <div className="arrow">→</div>
          <div className="step"><div className="step-num">2</div><h3>Copie</h3><p>Copie a legenda e o call to action num so clique.</p></div>
          <div className="arrow">→</div>
          <div className="step"><div className="step-num">3</div><h3>Publique</h3><p>Cole no Instagram e mantenha a presenca ativa.</p></div>
        </div>
      </section>

      <section className="landing-preview">
        <div className="preview-title">Uma unica decisao:<br /><em>publicar o conteudo que ja esta pronto.</em></div>
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
            <div><span>✓</span>30 dias de conteudo prontos a publicar</div>
            <div><span>✓</span>Legendas preparadas</div>
            <div><span>✓</span>Call to action incluida</div>
            <div><span>✓</span>Menos de 5 minutos por dia</div>
            <div><span>✓</span>Acesso imediato</div>
          </div>
        </div>
      </section>

      <section className="landing-authority">
        <h2>Criado para profissionais cuja prioridade nao e o Instagram.</h2>
        <p>Para quem precisa de presenca consistente sem transformar o conteudo em mais uma tarefa pesada.</p>
      </section>

      <section className="landing-emotion">
        <h2>Nao esta a comprar conteudo.<em>Esta a recuperar tempo.</em></h2>
        <p>Enquanto acompanha noivos, gere fornecedores e prepara eventos, a Agenda Ativa™ mantem a sua presenca online ativa sem lhe roubar tempo nem energia mental.</p>
      </section>

      <section className="landing-objection">
        <div>
          <h2>E se outras wedding planners comprarem?<em>O seu conteudo continua unico.</em></h2>
          <p>A Agenda Ativa™ fornece a ideia e a estrutura. A identidade final vem sempre do seu trabalho real.</p>
        </div>
        <ul>
          <li>As fotografias continuam a ser suas.</li>
          <li>Os videos continuam a ser seus.</li>
          <li>Os casamentos continuam a ser seus.</li>
          <li>A sua marca continua a ser sua.</li>
        </ul>
      </section>

      <section className="price-section" id="comprar">
        <h2>Pronta para ter o Instagram sob controlo?</h2>
        <p>Pagamento unico. Sem mensalidades. Sem subscricoes. Acesso imediato.</p>
        <div className="price-card">
          <div className="price">97€</div>
          <p>30 dias de conteudo prontos a publicar.</p>
          <p>Pagamento unico. Sem mensalidades. Sem subscricoes. Acesso imediato.</p>
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
