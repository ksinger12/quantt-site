import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//Resource: https://reactjsexample.com/vertical-timeline-for-react-js/
//This example: https://stephane-monnot.github.io/react-vertical-timeline/#/

const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Two-Stage Hiring</h3>
                <h4 className="vertical-timeline-element-subtitle">September</h4>
                <p>
                QUANTT's hiring process is amongst the toughest on Queen's University campus. Club positions require candidates to have strong organizational, behavioural and technical skills.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Team Formation</h3>
                <h4 className="vertical-timeline-element-subtitle">October</h4>
                <p>
                As our 10 week education program is kicked off, members are put into teams of 4-5 to begin developing their models for our algorithm trading competition.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Pitch Competition</h3>
                <h4 className="vertical-timeline-element-subtitle">November</h4>
                <p>
                Stressing the soft skills, members have the opportunity to demonstrate their progress as they receive technical and presentational feedback on the first draft of their algorithm design and data analysis.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Algorithm Trading Submissions</h3>
                <h4 className="vertical-timeline-element-subtitle">December</h4>
                <p>
                Members submit their finalized algorithm model for out-of-sample live trading throughout the months of January and February.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2022"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                //icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Research Phase</h3>
                <h4 className="vertical-timeline-element-subtitle">January</h4>
                <p>
                While their algorithms trade, teams will have the opportunity to challenge the state-of-the-art in financial mathematics as they propose simple solutions to digestible research topic.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2022"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                //icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">EOY Conference</h3>
                <h4 className="vertical-timeline-element-subtitle">March</h4>
                <p>
                QUANTT convenes with sponsors and delegates to showcase competition results and various research findings.
                </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                //icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                //icon={<StarIcon />}
            /> */}
        </VerticalTimeline>
    );
};
export default Timeline;