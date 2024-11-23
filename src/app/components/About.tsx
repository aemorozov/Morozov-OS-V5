export const About = () => {
  return (
    <div className="readme-container">
      <div className="top-line">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className="img-top-line" src="./icon/text-x-readme-icon.png" alt="icon" />
          <p className="p-top-line">About me</p>
        </div>
        <div className="slide-down-button slide-down-readme">╳</div>
      </div>
      <div className="text-zone">
        <div className="text-readme">
          <strong style={{ display: "block", marginTop: "20px" }}>
            Attention! Be careful with QR generator. It will use your browser for make the QRs and if you want to create
            more than 10 000 QRs, you should wait some time for the process (maybe 20-30 minutes).
          </strong>
          <hr />
          <h2 className="h2-readme">Specialist profile: Aleksei Morozov</h2>
          <p className="p-readme">
            <strong>
              Frontend Developer, <br />
              SEO specialist, <br />
              IT Systems Administrator
            </strong>
          </p>
          <h3>Contacts:</h3>
          <p className="p-readme">
            <ul>
              <li>Phone: +40 (799) 29-30-14</li>
              <li>
                Email:{" "}
                <a href="mailto:admin@aemorozov.com" target="_blank">
                  admin@aemorozov.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/aemorozov" target="_blank">
                  linkedin.com/in/aemorozov
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="https://github.com/aemorozov" target="_blank">
                  github.com/aemorozov
                </a>
              </li>
            </ul>
          </p>
          <h3>Profile summary</h3>
          <p className="p-readme">
            Aleksei Morozov is an experienced frontend developer and IT system administrator with over 4 years of
            commercial experience and in-depth knowledge in electronics diagnostics and repair. He combines technical
            skills in development and user support with a long-standing record of problem-solving in hardware
            maintenance and repair. His approach is rooted in systematization, process improvement, and creating optimal
            solutions.
          </p>
          <hr />
          <h3>Core competencies:</h3>
          <p className="p-readme">
            <ul>
              <li>
                <strong>Frontend Development:</strong> HTML5, CSS3, SCSS, JavaScript, React JS, responsive design and
                cross-browser compatibility. Proficient with WordPress, Tilda, and CS-Cart platforms. Aleksei has
                participated in over 20 projects, from corporate websites to specialized applications with a strong
                focus on SEO and performance.
              </li>
              <li>
                <strong>Administration and IT support:</strong> skilled in administering Windows and MacOS operating
                systems, managing user accounts, supporting MS Office, and using ticketing systems (such as Jira,
                AmoCRM, RemOnline). Service Desk and QA experience enable him to effectively handle incidents and
                provide user support.
              </li>
              <li>
                <strong>Electronics diagnostics and repair:</strong> over 7 years of experience in electronics
                diagnostics and repair (laptops, mobile phones), including running his own repair shop. Skilled in
                diagnosing and resolving both hardware and software issues. His attention to detail and ability to find
                optimal solutions ensure a high level of customer service.
              </li>
            </ul>
          </p>
          <h3>Professional Experience:</h3>
          <p className="p-readme">
            <ul>
              <li>
                <strong>Lead Frontend Developer</strong> at Akula OPT. <br />
                June 2023 – Present. <br />
                Developer and administrator for online stores based on CS-Cart. Responsible for fixing UI bugs,
                optimizing page loading speed, adding new features, and integrating with 1C. Works with MySQL databases
                and APIs.
              </li>
              <li>
                <strong>Freelance Fullstack Developer.</strong>
                <br />
                March 2021 – June 2023. <br />
                Involved in the development and support of various projects using React JS, Next JS, Node JS, and other
                tools. Projects included building medical applications, SEO-optimized websites, a QR code generator, and
                Windows app APIs.
              </li>
              <li>
                <strong>QA Specialist</strong> at Yandex. <br />
                March 2020 – March 2021. <br />
                Quality control and testing of Yandex applications (Drive, Maps, and Browser). Responsible for bug
                detection and user support.
              </li>
              <li>
                <strong>Electronics Repair Specialist</strong> at Lenina19. <br />
                September 2015 – March 2022. <br />
                Owner and manager of an electronics repair shop, performing diagnostics and repairs on mobile devices
                and laptops. Provided customer consultation, explaining technical details and suggesting optimal
                solutions.
              </li>
            </ul>
          </p>
          <h3>Additional information:</h3>
          <p className="p-readme">
            <ul>
              <li>
                <strong>Location:</strong> Bucharest, Romania. Open to relocation.
              </li>
              <li>
                <strong>Languages:</strong> Russian, English, Romanian (A1).
              </li>
              <li>
                <strong>Education:</strong> Rolling Scopes School (JavaScript/Frontend, 2022); Geek Brains (QA / Manual
                Testing / Java / Databases).
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
