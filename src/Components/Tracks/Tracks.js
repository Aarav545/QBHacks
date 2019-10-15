import React from "react";
import { Header, Image, Grid, Segment } from "semantic-ui-react";
import "./Tracks.css";
import Finance from "../Tracks/hand.svg";
import Health from "../Tracks/heart.svg";
import Education from "../Tracks/creative.svg";
export default class Schedule extends React.Component {
  render() {
    return (
      <section id={"Tracks"}>
        <div className={"TrackPage container"}>
          <div className={"Trackheader-contain"}>
            <Header className={"Track-head"}>Tracks</Header>
          </div>

          <Grid stackable={true} columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Segment className={"track-bubble"}>
                  <div className={"track-content container"}>
                    <div className={"track-header-div"}>
                      <Header className={"track-header"}>Finance</Header>
                    </div>
                    <div className={"track-image-div"}>
                      <Image className={"track-image"} src={Finance} />
                    </div>
                    <div className={"track-description-div"}>
                      <Header className={"track-description"}>
                        {" "}
                        While combining finance with next generation
                        technologies, this track focuses on advancing finance
                        one line at a time. Let your creativity fly, and let’s
                        see how you can revolutionize the financial industry!
                      </Header>
                    </div>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className={"track-bubble"}>
                  <div className={"track-content container"}>
                    <div className={"track-header-div"}>
                      <Header className={"track-header"}>Education</Header>
                    </div>
                    <div className={"track-image-div"}>
                      <Image className={"track-image"} src={Education} />
                    </div>
                    <div className={"track-description-div"}>
                      <Header className={"track-description"}>
                        This track combines the classroom learning environment
                        with modern and next generation technologies. With a
                        main goal of advancing the efficiency of the classroom,
                        this track focuses on making education accessible and
                        effective. Education is how we start, and we look
                        forward to seeing how you can change the way we learn in
                        the classroom!
                      </Header>
                    </div>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className={"track-bubble"}>
                  <div className={"track-content container"}>
                    <div className={"track-header-div"}>
                      <Header className={"track-header"}>Health</Header>
                    </div>
                    <div className={"track-image-div"}>
                      <Image className={"track-image"} src={Health} />
                    </div>
                    <div className={"track-description-div"}>
                      <Header className={"track-description"}>
                        This track is a junction of identifying creative
                        solutions and developing transformative technologies
                        that impact the medical industry positively. With the
                        goal of advancing modern medicine, this track focuses on
                        making healthcare accessible and diseases avoidable. We
                        look forward to seeing how you can revolutionize modern
                        medicine!
                      </Header>
                    </div>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}
