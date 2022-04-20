import { ArrowUpward } from "@material-ui/icons";
import "./top-novel.css";
import Profile from "../../../../images/img2.png";
export default function TopNovel() {
  return (
    <div className="topNovel ">
      <div className="container">
        <div className="col-10">
          <div className="col-12 d-flex flex-row justify-content-between p-0">
            <h1 className="display-6">Top Novels</h1>
            <select name="" id="" className="btn btn-secondary">
              <option value="" selected disabled hidden>
                Popularity
              </option>
              <option value="1">Mostly Popular</option>
              <option value="1">Less Popular</option>
            </select>
          </div>
          <div className="col-12">
            <div className="col-12 d-flex flex-row flex-wrap">
              <div className="col-6 d-flex flex-column mt-2">
                <h6 className="display-7">Languages</h6>
                <div className="col-12 d-flex flex-row justify-content-start">
                  <div className="thisItem">
                    <span className="select-item">Any</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Chinese</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Korean</span>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex flex-column mt-2">
                <h6 className="display-7">Status</h6>
                <div className="col-12 d-flex flex-row justify-content-start">
                  <div className="thisItem">
                    <span className="select-item">Any</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Ongoing</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Completed</span>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex flex-column mt-2">
                <h6 className="display-7">Sort By</h6>
                <div className="col-12 d-flex flex-row justify-content-start">
                  <div className="thisItem">
                    <span className="select-item">Any</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Ongoing</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Completed</span>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex flex-column mt-2">
                <h6 className="display-7">Genres</h6>
                <div className="col-12 d-flex flex-row justify-content-start">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Select genre"
                      className="form-control thisInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*---------------Item sorting start----------------*/}
        <div className="col-10 d-flex flex-row flex-wrap mt-5">
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-start mb-4">
            <div className="col-2 image-container">
              <img src={Profile} alt="image1" className="item-image" />
              <span className="item-status">Completed</span>
            </div>
            <div className="col-8 d-flex flex-column flex-wrap mx-4">
              <div className="col-12 item-title">
                A Record of a Mortal’s Journey to Immortality
              </div>
              <div
                className="col-12"
                style={{ height: "20px !important", textOverflow: "ellipsis" }}
              >
                <p>
                  Eligendi veniam, ab dolor at a deserunt commodi voluptatum
                  veritatis corrupti sed? Officiis eius a necessitatibus sequi
                  vel suscipit iste, voluptatibus repellat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
