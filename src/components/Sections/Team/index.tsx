import TeamMemberCard from '../../TeamMemberCard';

function Team() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s" style={ { visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn' } }>Time Trybe</h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s" style={ { visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' } }>Conheça o Time que vai te acompanhar em Front-end</h2>
            <p className="wow fadeInUp" data-wow-delay=".6s" style={ { visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' } }>
              Este time está aqui para te ajudar no que for preciso para vivenciar este módulo da melhor forma possível.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <TeamMemberCard
          name="Carol"
          teamRole="Facilitação"
          imgSrc="https://ca.slack-edge.com/TM13XHBBQ-U02U05ACW75-30254e62a43f-512"
          linkedinUrl="https://www.linkedin.com/in/caroline-lima/"
        />
        <TeamMemberCard
          name="Ander"
          teamRole="Instrução"
          imgSrc="https://ca.slack-edge.com/TM13XHBBQ-U02NN25SU4V-6f90f1e4c1d0-512"
          linkedinUrl="https://www.linkedin.com/in/carolinalima/"
        />
        <TeamMemberCard
          name="Danilo"
          teamRole="Instrução"
          imgSrc="https://ca.slack-edge.com/TM13XHBBQ-U044NTHMW3D-fd92da599d16-512"
          linkedinUrl="https://www.linkedin.com/in/carolinalima/"
        />
        <TeamMemberCard
          name="Saturnino"
          teamRole="Instrução"
          imgSrc="https://ca.slack-edge.com/TM13XHBBQ-U039S2RDF0A-f70c222e7f65-512"
          linkedinUrl="https://www.linkedin.com/in/carolinalima/"
        />
        <TeamMemberCard
          name="Moisés"
          teamRole="Instrução"
          imgSrc="https://ca.slack-edge.com/TM13XHBBQ-U02BN4BTTSP-c96c4a8be62c-512"
          linkedinUrl="https://www.linkedin.com/in/carolinalima/"
        />
        <TeamMemberCard
          name="Rafa"
          teamRole="Instrução"
          imgSrc="https://ca.slack-edge.com/TM13XHBBQ-U02SE5H3UN9-a4c2b772cc05-512"
          linkedinUrl="https://www.linkedin.com/in/carolinalima/"
        />
        <TeamMemberCard
          name="Jensen"
          teamRole="Instrução"
          imgSrc="https://ca.slack-edge.com/TM13XHBBQ-U01QH6FA70W-58e7fc5c6404-512"
          linkedinUrl="https://www.linkedin.com/in/carolinalima/"
        />
        <TeamMemberCard
          name="Procópio"
          teamRole="Instrução"
          imgSrc="https://ca.slack-edge.com/TM13XHBBQ-U02JANSEE9F-4d355d65061d-512"
          linkedinUrl="https://www.linkedin.com/in/carolinalima/"
        />
        <TeamMemberCard
          name="Felipe"
          teamRole="Coordenação"
          imgSrc="https://ca.slack-edge.com/TM13XHBBQ-U044GBYRYAJ-7be4bc859dba-512"
          linkedinUrl="https://www.linkedin.com/in/carolinalima/"
        />
      </div>
    </div>
  );
}

export default Team;
