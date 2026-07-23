import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/76992f3c-c2e2-466f-b7ed-6b3bfb36cff7.jpg" alt="Bheru Singh Rajput"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Bheru Singh</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
  Bheru Singh founded this project to showcase his skills in Full Stack Web
  Development. Passionate about building scalable and user-friendly web
  applications, he enjoys solving real-world problems using modern web
  technologies.
</p>
         
<p>
  He has hands-on experience with React.js, Node.js, Express.js, MongoDB, JWT
  Authentication, REST APIs, and responsive UI development. He is continuously
  learning and improving his backend and frontend development skills.
</p>
          <p>Playing basketball is his zen.</p>
       <p>
  Connect on{" "}
  <a
    href="https://www.linkedin.com/in/bheru-singh"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</p>
        </div>
      </div>
    </div>
  );
}

export default Team;