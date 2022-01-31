import { Button, Col, Modal, Row } from "antd";
import React, { FC } from "react";
import CalendarItem from "../components/CalendarItem";
import EventForm from "../components/EventForm";
import scssStyle from "../scss/main.module.scss";

const Event: FC = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Col span={24}>
      {" "}
      <div className={scssStyle.container__calendar}>
        <Row>
          <Button
            className={scssStyle.button__event}
            onClick={() => setVisible(!visible)}
          >
            Add event
          </Button>
        </Row>
        <CalendarItem events={[]} />
        <Modal
          title="Add event"
          visible={visible}
          onCancel={() => setVisible(!visible)}
          centered
          footer={null}
        >
          <EventForm />
        </Modal>
      </div>
    </Col>
  );
};

export default Event;
