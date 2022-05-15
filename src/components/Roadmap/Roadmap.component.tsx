import React from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineElements } from 'src/constants/TimelineElement.constants';
import styles from './Roadmap.module.scss';

export const Roadmap: React.FC = () => {
    const completeIconStyle = { background: '#06D6A0' };
    const todoIconStyles = { background: '#fe6c3e' };
    return (
        <div className={['sectionPadding', styles['roadMapSec']].join(' ')}>
            <div className="wrapper">
                <div className="sectionHeading alignCenter">
                    <Header as="h6" content="Next steps of socialize" className="noMargin" />
                    <Header as="h2" content="Our Roadmap" />
                </div>

                <VerticalTimeline>
                    {TimelineElements.map(ele => {
                        const isWorkIcon = ele.icon === 'check';
                        return (
                            <VerticalTimelineElement
                                key={ele.id}
                                date={ele.date}
                                className={styles['verticalTimeEle']}
                                iconStyle={isWorkIcon ? completeIconStyle : todoIconStyles}
                                icon={
                                    isWorkIcon ? (
                                        <Icon name="check" size="large" />
                                    ) : (
                                        <Icon name="tasks" size="large" />
                                    )
                                }
                            >
                                <h3 className="vertical-timeline-element-title">{ele.title}</h3>
                                {
                                    ele.description ?
                                        <p id="description">{ele.description}</p>
                                        :
                                        <List bulleted>
                                            {ele.list?.map(({ key, value }) => (
                                                <List.Item key={key}> {value}</List.Item>
                                            ))}
                                        </List>
                                }
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </div>
    );
};
