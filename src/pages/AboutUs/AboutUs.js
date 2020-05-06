import React from "react";
import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <div data-testid="aboutus" className="about-us">
      <h2 className="heading heading--secondary">O Nas</h2>
      <img
        className="about-us__photo"
        src="https://images.unsplash.com/photo-1574267432644-f410f8ec2474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
      />
      <div className="about-us__container">
        <div className="about-us__gallery">
          <img
            className="about-us__photo about-us__photo--small"
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
          <img
            className="about-us__photo about-us__photo--small"
            src="https://images.unsplash.com/photo-1568111561564-08726a1563e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=738&q=80"
          />
          <img
            className="about-us__photo about-us__photo--small"
            src="https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <img
            className="about-us__photo about-us__photo--small"
            src="https://images.unsplash.com/photo-1585331505473-7586f9cb0854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
        <div className="about-us__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
            leo malesuada, malesuada tortor congue, laoreet ligula. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nunc interdum lobortis aliquam. Nulla erat enim,
            faucibus nec nisl at, tempor blandit urna. Pellentesque malesuada id
            velit ut viverra. Pellentesque tincidunt ante ac enim accumsan, eu
            vulputate nibh ultrices. Fusce leo urna, placerat accumsan imperdiet
            et, laoreet sit amet massa. Integer auctor eros quis sem egestas
            malesuada. Sed id condimentum quam. Donec in fermentum nulla, vitae
            finibus purus. Nullam consequat condimentum augue et efficitur.
          </p>
          <p>
            Fusce ultrices non enim quis aliquet. Quisque pharetra sit amet
            magna eget porttitor. Praesent efficitur sollicitudin laoreet. In
            hac habitasse platea dictumst. Aenean volutpat dictum lobortis.
            Pellentesque rhoncus fermentum odio sit amet porta. Mauris eget nibh
            vel mauris fermentum convallis a at eros. Quisque a rhoncus erat. Ut
            fringilla nisl vitae elit convallis, in vehicula arcu vestibulum. Ut
            iaculis purus eu ipsum aliquet fringilla. Ut vehicula lacus sed
            vestibulum facilisis. Sed non erat quis purus vestibulum venenatis
            vel eu risus. Integer consequat, risus ut bibendum pellentesque,
            erat justo pulvinar magna, non rutrum leo enim a felis. Cras vel
            lectus lorem. Duis quis pharetra massa, quis ullamcorper ipsum.
          </p>
          <p>
            Nulla euismod dignissim accumsan. Praesent vel consectetur lacus.
            Integer nec dui id nulla mollis efficitur ut a mauris. Vestibulum
            nec libero eu lacus eleifend porta id vitae dui. Cras augue ligula,
            fermentum eu semper id, varius ut dui. Mauris sed leo lacus. Nullam
            mattis mauris nec leo posuere, in maximus justo pretium. Nunc sed
            nibh a turpis ultrices feugiat. Mauris consectetur at urna nec
            pellentesque.
          </p>
          <p>
            Aliquam iaculis diam vitae ligula molestie, in finibus justo
            venenatis. Sed vel nibh lacinia, consectetur tortor et, faucibus
            eros. Vivamus eleifend aliquet ipsum et mattis. Suspendisse aliquet
            dictum maximus. Praesent id nunc dictum, fermentum magna non,
            ullamcorper ex. Etiam nec consequat ipsum. Nunc convallis, nisi
            vitae imperdiet aliquam, diam purus venenatis libero, vitae finibus
            lorem dolor vitae nunc. Nulla id sagittis purus, rutrum euismod
            orci. In sit amet leo lacus. Suspendisse quis dictum orci, at
            egestas tortor. Curabitur sed augue eu purus vehicula efficitur.
            Etiam rutrum volutpat est et tempor. Phasellus varius nisi vel diam
            eleifend consequat. Quisque tempus, elit et mattis euismod, felis
            turpis convallis libero, nec aliquam mi ante blandit tellus.
            Suspendisse commodo ex vitae odio dignissim, quis venenatis arcu
            imperdiet. Fusce pellentesque lobortis felis in dignissim.
          </p>
          <p>
            Curabitur porttitor auctor risus sed auctor. Aenean id elit iaculis,
            dapibus orci eu, malesuada lacus. Curabitur odio nunc, euismod id
            lacus non, dignissim facilisis velit. Donec et arcu in massa semper
            varius in nec massa. Nulla facilisi. Aliquam tincidunt elit ac erat
            pharetra venenatis. Vivamus ac feugiat nisl. Maecenas eros turpis,
            fringilla ac ligula nec, luctus vestibulum massa. Suspendisse non
            lectus consectetur, dapibus eros vitae, dignissim augue. Quisque
            vulputate justo et mi dignissim luctus. In laoreet porta placerat.
            Integer maximus porta neque ac venenatis. Etiam sollicitudin, sem eu
            dictum euismod, magna purus efficitur leo, in blandit arcu magna ut
            ipsum. Nunc mollis velit id mi bibendum, vitae accumsan neque
            faucibus. Aliquam eget tincidunt leo, nec vestibulum ligula.
          </p>
          <p>
            Aliquam erat volutpat. Sed at sagittis lacus. Nulla quis urna orci.
            In vitae consectetur eros. Ut interdum purus eu ultricies lacinia.
            Nunc fermentum sodales magna ut congue. Sed sed scelerisque tortor.
            Pellentesque tempor velit ut est dictum, vitae finibus quam
            placerat. Nam eget diam lorem. Proin neque libero, vulputate vitae
            efficitur nec, pharetra at libero.
          </p>
          <p>
            Nullam in arcu tortor. Nunc eu felis et odio fermentum tristique non
            id elit. In at libero nec metus finibus maximus nec a tortor.
            Curabitur tincidunt lorem sed porta ornare. Etiam venenatis finibus
            volutpat. Nam quis tempus nibh. Donec a commodo lacus. Sed posuere
            lorem ac quam tempus, auctor porttitor lacus vehicula.
          </p>
        </div>
      </div>
    </div>
  );
}
