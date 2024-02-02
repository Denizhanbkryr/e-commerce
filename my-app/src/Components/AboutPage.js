import TeamPage from "./TeamPage";
import Bandage2 from "./Bandage2";
import Footer from "./Footer";
import { Button } from "reactstrap";
import NavBarAboutPage from "./NavBarAboutPage";
import NavBar from "./NavBar";
import GreenComminicationBar from "./GreenComminicationBar";

const AboutPage = () => {
  const imgstyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="mainDivAbout">
      <div>
        <GreenComminicationBar />
      </div>
      <div>
        <NavBar />
      </div>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          margin: "5%",
        }}
      >
        <h4 style={{ opacity: "70%" }}>What we do</h4>
        <h1 style={{ fontWeight: "bold" }}>Inovation tailored for you</h1>
        <p>
          Home
          <i
            class="fa-solid fa-greater-than"
            style={{ margin: " auto 1%", fontSize: "x-small", opacity: "55%" }}
          />
          Team
        </p>
      </header>
      <div class="parent">
        <div class="bigPicture">
          <img
            alt=""
            style={{
              left: "0",
              objectFit: "cover",

              top: "0",
              width: " 100%",
            }}
            src="https://s3-alpha-sig.figma.com/img/e98c/6914/973e6a41dfef7ffabf70f468edcc4107?Expires=1699228800&Signature=lLAVD-igD~B7ugU0nZTjNzcAETFeddIGoJNgb4fwpxGXL8Fy5Mx05kdln6dLQZXxOXnwaCguOTcjQkcy9EVxJH5oeAToGJHyTaXn9bCduyJTetADroy~vrKpeTY3YVigMuAlgvKqE2u8zsXI0XziXEZu65zE~40MZ8Vtwjs3vLv5YLmikLUU2cJ55nhj4yy0moiMJjaNy87FululGpfzoz9bhmIAp3DpZeGSPOmmKy9KBlgpAy2j~AyKwBFu-72X~MyinnIAxyYW70Jek7OzdDc-P28sHc1w~8e12E4sDgDlXImZ60DItn2PuqDF8NCDzlgc9fjlhuB-jyXqFb0f-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </div>
        <div class="img1">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/5c2a/4592/b5f3cb754566bde7b62ef5da4222383b?Expires=1699228800&Signature=NiBH8JmeJHOOU8EB0V5pmOC21USii8pV7wtO08tkrRupMuN~c0SfDlQpAPYixufw9nunizE19J3yg32pKAS0zaSBnUm5sVlq9GAf8ckSm5wKMTjflQ8tpDgNlYEaJK1bK-RD7o4XES8vvkW~YJq9I94Hg2pUTAbJdJ81~l6Pa8YsW~8LmlrNwmN8Ahl0iKJAbCIT1qwoK-zceliaswW1Dpw4xh6ZGIV8dMHtwENXeoAqX3VszW8yO20hLXJjCL2epbOtq1ALzowIPBFuhxNb0-AcoL1BjsPLVZSIyhnwdbr9OvZz-yxQwKG-Ss80fcGeabWr9nSHzeEUYevnPSwDyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </div>
        <div class="img2">
          <img
            alt=""
            style={imgstyle}
            src="https://s3-alpha-sig.figma.com/img/147e/c7b9/17b3032e65f4538f6803ef11e8c0e09c?Expires=1699228800&Signature=l04VLwKwjVKvUMMdxmqxLFQRFD5Xklmon~wZ6jh9W-Aiac7zbtxzvsizmxtIUYXOCFlt0Pah7yWWpEvTsDXDfCRqa5tgdM0V3Y3qMNIbd6niyygJxv3HjAfLmXVE4FapQXUUGX7LH4rPbCBrwbN51FVHzMsKdBxIW6mZe2Mx4nbINHc-O0Mh80yzuSW~noIFMZYgCggSdNLU1zxN-SckZ8TVlyw3F6oUz3hSVhgUsIEl9Ymum5vkg0lJgQw1lalIBEp4p~KI1ebPcV7IEzeY~-vuD7x6MiGDxnJq9E~SmpMwpIC1P7fdWKOOqUEwjeWehvzmelgS6wgifW4p1XXxxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </div>
        <div class="img3">
          <img
            alt=""
            style={imgstyle}
            src="https://s3-alpha-sig.figma.com/img/4ead/0629/924f04ede9b2a5224dec41b501dbaa4c?Expires=1699228800&Signature=VQ-ZA3JinZeTvSj4-1Jkje-MF2-tesNwOrQptJ0mswZ3S49HCbf2r1CZZ74W47fWgGSNAduCPUMW90--lJrDBxzmGxyg6Dg~cV6Ky6lPlUDl~Y1MiLpAPg3glitla0bx18Ssz4DBoJ3hq50BlPUdmma5An629DjRXmJdSGjeH6APxkhSKK0c2I00JAP-3jPOxF2yHfzOB4GZqTp~pA7Z8c0VxeSMwBdNLwCuDB8qrHE76M6l4BXZemHScwknguNEz-3WbOQpRl~fM2Eo6QAjBn8fh--O2Ki3z9NvsMU5XUN5a-PFae2dFZmTs581AHFu-1VHzvqhPPrxmJL82YxkiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </div>
        <div class="img4">
          <img
            alt=""
            style={imgstyle}
            src="https://s3-alpha-sig.figma.com/img/1251/6b52/a12de21bbd956c34ab16e5b1e48eeefe?Expires=1699228800&Signature=a4GBYM7Yq69u7yhysh4V6s40yqzRNE~fGLf8ghszizGdP2YQOei5sVsNX0uFvX0VaNt8SvbMYjr-Br0FtGkhK7mNBUZvlP0e~qBuuPOUlwh~-k2AwXE5OH~6Wd5-GlQchlDbsdtmEgjnaMiKEbvfmvR0ltaZ8DtpS7U~YpcksuH2S~Ky--xDiychFkOuPGmrGG0Q6J8hpO64EYwpNduBw8vk2lVdw3~H48h6u7MQzdt4qfvwpVZbPDSe6oQtvu2ivqmnB~bxDNO6QySnHeaGgnV9XcYzdWFyRp1dXsxuAuubqRVIz8uLRc27W-u23wRzyEl-mnk7USVsWnXo1Zka5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </div>
      </div>

      <TeamPage />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: "3% 0" }}>Start Your 14 Days Free Trial</h1>
        <p style={{ marginBottom: "3%", opacity: "55%", fontWeight: "500" }}>
          Met minim Mollie non desert Alamo est sit cliquey dolor <br />
          do met sent. RELIT official consequent.
        </p>
        <div style={{ textAlign: "center", marginBottom: "5%" }}>
          <Button
            size="lg"
            style={{
              width: "225px",
              backgroundColor: "#23A6F0",
              border: "none",
            }}
          >
            Try it free now
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "0 42%",
          }}
        >
          <svg
            width="30"
            height="25"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="logos:twitter" clip-path="url(#clip0_2874_4662)">
              <path
                id="Vector"
                d="M30 2.98253C28.8766 3.4802 27.685 3.80686 26.4649 3.95167C27.7358 3.18995 28.7116 1.98374 29.1711 0.546553C27.963 1.26349 26.6412 1.76862 25.2628 2.04011C24.14 0.843974 22.5405 0.0964355 20.7702 0.0964355C17.3711 0.0964355 14.6152 2.85222 14.6152 6.25112C14.6152 6.73358 14.6696 7.20327 14.7745 7.65386C9.6593 7.3971 5.12414 4.94683 2.0884 1.22308C1.55871 2.1321 1.2552 3.18948 1.2552 4.31729C1.2552 6.45268 2.34188 8.33647 3.99328 9.44026C3.01588 9.40965 2.05998 9.14566 1.20539 8.67034C1.20504 8.69612 1.20504 8.7219 1.20504 8.7478C1.20504 11.7299 3.3266 14.2175 6.14215 14.783C5.2358 15.0294 4.28511 15.0655 3.3627 14.8884C4.14586 17.3337 6.41895 19.113 9.11215 19.1628C7.0057 20.8135 4.35176 21.7976 1.46824 21.7976C0.971367 21.7976 0.481523 21.7684 0 21.7115C2.72379 23.4579 5.95898 24.4768 9.43477 24.4768C20.7559 24.4768 26.9466 15.0982 26.9466 6.96491C26.9466 6.69796 26.9407 6.43253 26.9288 6.16862C28.1337 5.29755 29.1737 4.21864 30 2.98253Z"
                fill="#55ACEE"
              />
            </g>
            <defs>
              <clipPath id="clip0_2874_4662">
                <rect width="30" height="24.4922" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="logos:facebook" clip-path="url(#clip0_2874_4664)">
              <path
                id="Vector"
                d="M28.3443 30.0001C29.2586 30.0001 30 29.2588 30 28.3444V1.65574C30 0.741211 29.2586 0 28.3443 0H1.65574C0.741094 0 0 0.741211 0 1.65574V28.3444C0 29.2588 0.741094 30.0001 1.65574 30.0001H28.3443Z"
                fill="#395185"
              />
              <path
                id="Vector_2"
                d="M20.6993 30.0001V18.3824H24.5989L25.1828 13.8549H20.6993V10.9641C20.6993 9.65327 21.0634 8.75995 22.9432 8.75995L25.3407 8.7589V4.70948C24.9259 4.65429 23.5028 4.53101 21.8471 4.53101C18.3903 4.53101 16.0239 6.64097 16.0239 10.5159V13.8549H12.1143V18.3824H16.0239V30.0001H20.6993Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2874_4664">
                <rect width="30" height="30.0001" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="ant-design:instagram-outlined"
              clip-path="url(#clip0_2874_4667)"
            >
              <path
                id="Vector"
                d="M14.9998 7.30887C10.7435 7.30887 7.30854 10.7439 7.30854 15.0001C7.30854 19.2564 10.7435 22.6914 14.9998 22.6914C19.2561 22.6914 22.6911 19.2564 22.6911 15.0001C22.6911 10.7439 19.2561 7.30887 14.9998 7.30887ZM14.9998 19.9989C12.2473 19.9989 10.001 17.7526 10.001 15.0001C10.001 12.2476 12.2473 10.0014 14.9998 10.0014C17.7523 10.0014 19.9986 12.2476 19.9986 15.0001C19.9986 17.7526 17.7523 19.9989 14.9998 19.9989ZM23.0061 5.20137C22.0123 5.20137 21.2098 6.00387 21.2098 6.99762C21.2098 7.99137 22.0123 8.79387 23.0061 8.79387C23.9998 8.79387 24.8023 7.99512 24.8023 6.99762C24.8026 6.76165 24.7563 6.52794 24.6662 6.30988C24.576 6.09181 24.4437 5.89368 24.2769 5.72682C24.11 5.55996 23.9119 5.42766 23.6938 5.3375C23.4757 5.24733 23.242 5.20107 23.0061 5.20137ZM29.9923 15.0001C29.9923 12.9301 30.0111 10.8789 29.8948 8.81262C29.7786 6.41262 29.2311 4.28262 27.4761 2.52762C25.7173 0.768869 23.5911 0.225119 21.1911 0.108869C19.1211 -0.00738074 17.0698 0.0113693 15.0035 0.0113693C12.9335 0.0113693 10.8823 -0.00738074 8.81604 0.108869C6.41604 0.225119 4.28604 0.772619 2.53104 2.52762C0.772288 4.28637 0.228537 6.41262 0.112287 8.81262C-0.00396278 10.8826 0.0147873 12.9339 0.0147873 15.0001C0.0147873 17.0664 -0.00396278 19.1214 0.112287 21.1876C0.228537 23.5876 0.776038 25.7176 2.53104 27.4726C4.28979 29.2314 6.41604 29.7751 8.81604 29.8914C10.886 30.0076 12.9373 29.9889 15.0035 29.9889C17.0735 29.9889 19.1248 30.0076 21.1911 29.8914C23.5911 29.7751 25.7211 29.2276 27.4761 27.4726C29.2348 25.7139 29.7786 23.5876 29.8948 21.1876C30.0148 19.1214 29.9923 17.0701 29.9923 15.0001ZM26.6923 23.8426C26.4186 24.5251 26.0886 25.0351 25.5598 25.5601C25.0311 26.0889 24.5248 26.4189 23.8423 26.6926C21.8698 27.4764 17.1861 27.3001 14.9998 27.3001C12.8135 27.3001 8.12604 27.4764 6.15354 26.6964C5.47104 26.4226 4.96104 26.0926 4.43604 25.5639C3.90729 25.0351 3.57729 24.5289 3.30354 23.8464C2.52354 21.8701 2.69979 17.1864 2.69979 15.0001C2.69979 12.8139 2.52354 8.12637 3.30354 6.15387C3.57729 5.47137 3.90729 4.96137 4.43604 4.43637C4.96479 3.91137 5.47104 3.57762 6.15354 3.30387C8.12604 2.52387 12.8135 2.70012 14.9998 2.70012C17.1861 2.70012 21.8736 2.52387 23.8461 3.30387C24.5286 3.57762 25.0386 3.90762 25.5636 4.43637C26.0923 4.96512 26.4223 5.47137 26.6961 6.15387C27.4761 8.12637 27.2998 12.8139 27.2998 15.0001C27.2998 17.1864 27.4761 21.8701 26.6923 23.8426Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_2874_4667">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="logos:linkedin-icon" clip-path="url(#clip0_2874_4669)">
              <path
                id="Vector"
                d="M25.5782 25.4624H21.1504V18.5282C21.1504 16.8747 21.1209 14.7461 18.8475 14.7461C16.5414 14.7461 16.1885 16.5477 16.1885 18.4078V25.4619H11.7609V11.2024H16.0114V13.1512H16.071C16.4963 12.4238 17.111 11.8254 17.8496 11.4198C18.5881 11.0142 19.4229 10.8165 20.2649 10.8477C24.7526 10.8477 25.58 13.7996 25.58 17.6398L25.5782 25.4624ZM6.76477 9.25338C5.34567 9.25361 4.19504 8.10334 4.19481 6.68423C4.19458 5.26513 5.34473 4.11451 6.76384 4.11427C8.18294 4.11392 9.33356 5.26419 9.3338 6.6833C9.33392 7.36478 9.06333 8.0184 8.58155 8.50038C8.09977 8.98236 7.44625 9.25322 6.76477 9.25338ZM8.9787 25.4625H4.54629V11.2024H8.97858V25.4624L8.9787 25.4625ZM27.7856 0.00217493H2.32139C1.11788 -0.0113659 0.130919 0.952719 0.116211 2.15622V27.7266C0.130452 28.9307 1.1173 29.8957 2.32127 29.8831H27.7856C28.9921 29.898 29.9828 28.933 29.9995 27.7266V2.15424C29.9823 0.9484 28.9915 -0.0155683 27.7856 0.000190493"
                fill="#0A66C2"
              />
            </g>
            <defs>
              <clipPath id="clip0_2874_4669">
                <rect width="30" height="29.8833" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <Bandage2 />
      <hr style={{ margin: "0 13vw" }} />

      <Footer />
    </div>
  );
};
export default AboutPage;
