import React, { useEffect } from "react";
import { Form, Modal, Input, Button, Select } from "antd";
import $lang from "../../utils/content/jp.json";

const WarehouseRegisterModal = ({ isOpen, onClose, onSave, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues]);

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        onSave(values, form);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title={$lang.shipperMaster}
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      <Form
        form={form}
        // layout="vertical"
        labelCol={{ span: 7 }}
        labelAlign="left"
      >
        <Form.Item name="id" style={{ height: 0 }}>
          <Input type="hidden" />
        </Form.Item>
        <Form.Item
          name="name"
          label={$lang.shipperName}
          rules={[{ required: true, message: $lang.tableCommon.warning }]}
        >
          <Input />
        </Form.Item>
        <div style={{ textAlign: "right" }}>
          <Button onClick={handleSave} style={{ marginRight: 10 }}>
            {" "}
            {$lang.newResiger}
          </Button>
          <Button onClick={onClose} style={{ marginRight: "10px" }}>
            {$lang.cancel}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default WarehouseRegisterModal;
