type TeamMemberCardProps = {
  name: string;
  teamRole: string;
  imgSrc: string;
  linkedinUrl: string;
  githubUrl?: string;
};

function TeamMemberCard({ name, teamRole, imgSrc, linkedinUrl, githubUrl = '' }: TeamMemberCardProps) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-team wow fadeInUp" data-wow-delay=".2s" style={ { visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' } }>
        <div className="image">
          <img alt="#" data-pagespeed-url-hash="4182764257" src={ imgSrc } />
        </div>
        <div className="content">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="text">
                <h3>{name}</h3>
                <h5>{teamRole}</h5>
              </div>
            </div>
            <div className="col-6">
              <ul className="social">
                {
                  githubUrl && (
                    <li>
                      <a
                        href={ githubUrl }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="lni lni-github-original" />
                      </a>
                    </li>
                  )
                }
                <li>
                  <a
                    href={ linkedinUrl }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="lni lni-linkedin-original" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
