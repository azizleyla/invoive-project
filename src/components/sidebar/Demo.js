import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  DatePicker,
  Select,
  Typography,
} from "antd";

const { Option } = Select;
const { Title } = Typography;
const Demo = ({ setIsShowAddForm }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="form-wrapper"
      style={{
        overflowY: "scroll",
        height: "100%",
        paddingRight: "20px",
      }}
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2 className="title" level={2}>
        Create Invoice
      </h2>
      <h4 level={4}>Bill From</h4>
      <Form.Item
        label="Street Address"
        name="streetAddress"
        rules={[{ required: true }]}
      >
        <Input className="input-field" />
      </Form.Item>
      <Row gutter={8}>
        <Col md={8}>
          <Form.Item
            label="City"
            name="city"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}
          >
            <Input className="input-field" />
          </Form.Item>{" "}
        </Col>
        <Col md={8}>
          <Form.Item
            label="Post Code"
            name="postCode"
            rules={[{ required: true }]}
          >
            <Input className="input-field" />
          </Form.Item>
        </Col>
        <Col md={8}>
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true }]}
          >
            <Input className="input-field" />
          </Form.Item>
        </Col>
      </Row>
      <Title level={4}>Bill To</Title>
      <Form.Item
        label="Client's Name"
        name="clientName"
        rules={[{ required: true }]}
      >
        <Input className="input-field" />
      </Form.Item>
      <Form.Item
        label="Client's Email"
        name="clientEmail"
        rules={[{ required: true }]}
      >
        <Input
          className="input-field"
          placeholder="Email"
          rules={[
            {
              required: true,
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        label="Street Address"
        name="clientStreetAddress"
        rules={[{ required: true }]}
      >
        <Input
          className="input-field"
          rules={[
            {
              required: true,
            },
          ]}
        />
      </Form.Item>
      <Row gutter={8}>
        <Col md={8}>
          <Form.Item
            label="City"
            name="clientCity"
            rules={[{ required: true }]}
          >
            <Input
              className="input-field"
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col md={8}>
          <Form.Item
            label="Post Code"
            name="postCode"
            rules={[{ required: true }]}
          >
            <Input
              className="input-field"
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col md={8}>
          <Form.Item
            label="Country"
            name="Country"
            rules={[{ required: true }]}
          >
            <Input
              className="input-field"
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col md={12}>
          <Form.Item label="Invoice Date">
            <DatePicker className="input-field" />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item label="Payment Terms">
            <Select defaultValue="Net 1 days" className="input-field">
              <Option className="input-field">Net 1 days</Option>
              <Option value="">Net 14 days</Option>
              <Option value="">Net 30 days</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true }]}
      >
        <Input
          className="input-field"
          rules={[
            {
              required: true,
            },
          ]}
        />
      </Form.Item>
      <Row justify="space-between">
        <Form.Item>
          <button
            type="button"
            onClick={() => setIsShowAddForm(false)}
            className="form-btn discard-btn"
          >
            Discard
          </button>
        </Form.Item>
        <Row gutter={8}>
          <Col>
            <Form.Item>
              <button className="form-btn draft-btn">Save as Draft</button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <button className="form-btn  save-btn" type="primary">
                Save & Send
              </button>
            </Form.Item>
          </Col>
        </Row>
      </Row>
    </Form>
  );
};

export default Demo;
