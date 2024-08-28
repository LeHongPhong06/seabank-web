"use client";
import { colors } from "@/constants/colors";
import { ProductContext } from "@/context/product";
import { CloseOutlined, CreditCardFilled } from "@ant-design/icons";
import { Checkbox, Col, ConfigProvider, Form, Input, Radio, RadioGroupProps, Row, Select } from "antd";
import { CheckboxGroupProps } from "antd/lib/checkbox";
import { CSSProperties, useContext, useState } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { actionsFormRegisterConsulting } from "./actions";
import SelectForm from "../selects/SelectForm";

const FormIndividualRegister = () => {
  const [accpectCondition, setAccpectCondition] = useState<Array<string>>([]);
  const productContext = useContext(ProductContext);
  const { dispatch } = productContext;

  const optionRadioGender: RadioGroupProps["options"] = [
    {
      label: <LabelInput title='Nam' styles={{ fontWeight: 400 }} />,
      value: "male",
    },
    {
      label: <LabelInput title='Nữ' styles={{ fontWeight: 400 }} />,
      value: "female",
    },
    {
      label: <LabelInput title='Khác' styles={{ fontWeight: 400 }} />,
      value: "orther",
    },
  ];
  const optionCheckBox: CheckboxGroupProps["options"] = [
    {
      value: "accpet",
      label:
        "Bằng cách tích vào ô này, tôi đồng ý cung cấp và cho phép ngân hàng xử lý những dữ liệu trên để nhận thông báo từ SeABank.",
    },
  ];
  const onFinish = async (values: any) => {
    const res = await actionsFormRegisterConsulting(values);
    console.log("res", res);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            controlHeight: 48,
            colorBorder: colors.GRAY_BTN,
            colorTextPlaceholder: colors.GRAY_BTN,
            activeBorderColor: colors.RED,
            hoverBorderColor: colors.RED,
            borderRadius: 12,
            paddingInline: 16,
            fontSize: 16,
            activeShadow: "0 0 0 2px rgba(221, 27, 28, 0.1)",
          },
          Radio: {
            controlOutline: colors.PRIMARY_OUTLINE,
            colorPrimary: colors.RED,
          },
          Checkbox: {
            controlInteractiveSize: 18,
            colorPrimaryHover: colors.RED,
            colorPrimary: colors.RED,
          },
        },
      }}
    >
      <div className='relative px-4 py-6 sm:px-16 sm:py-12'>
        <div
          className='absolute left-0 right-0 mx-auto size-14 -translate-y-24 sm:-translate-y-32 bg-[rgba(0,_0,_0,_0.65)] flex justify-center items-center rounded-full hover:cursor-pointer hover:bg-black'
          onClick={() => dispatch?.({ type: "changeModalIndividual", payload: { modalIndividualRegister: false } })}
        >
          <CloseOutlined className='text-white text-xl' />
        </div>
        <div className='mb-4 flex flex-col gap-2 md:items-center'>
          <h3 className='capitalize leading-7 bg-gradient-primary text-transparent bg-clip-text font-bold text-xl md:text-2xl'>
            Đăng ký tư vấn
          </h3>
          <p className='leading-[18px] font-medium text-sm md:text-base md:text-center'>
            <span className='text-black'>SeABank mang đến giải pháp tài chính phù hợp cho</span>
            <span className='text-transparent bg-gradient-primary bg-clip-text font-semibold capitalize ml-1'>
              Cá nhân
            </span>
          </p>
        </div>
        <Form layout='vertical' onFinish={onFinish} className='register-advise-form'>
          <Row
            gutter={[
              { xs: 0, md: 16 },
              { xs: 8, sm: 16 },
            ]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please enter name",
                  },
                ]}
                name={"fullName"}
                label={<LabelInput title='Họ và tên' />}
              >
                <Input placeholder={"Họ và tên"} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item label={<LabelInput title='Số điện thoại' />} name={"phone"}>
                <Input placeholder={"Số điện thoại"} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item label={<LabelInput title='Giới tính' />} name={"gender"}>
                <Radio.Group options={optionRadioGender} style={{ fontSize: 16, fontWeight: 400 }} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item label={<LabelInput title='Email' />} name={"email"}>
                <Input placeholder={"Email"} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item label={<LabelInput title='Nơi ở' />} name={"province"}>
                <SelectForm placeholder={"Chọn tỉnh thành"} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item label={<LabelInput title='Lĩnh vực quan tâm' />} name={"type"}>
                <SelectForm placeholder={"Chọn lĩnh vực"} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label={<LabelInput title='Ghi chú' />} name={"content"}>
                <Input.TextArea placeholder={"Nhập nội dung"} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Checkbox.Group
                value={accpectCondition}
                options={optionCheckBox}
                style={{ fontWeight: 500 }}
                onChange={(event) => setAccpectCondition(event)}
              />
            </Col>
            <Col className='md:flex md:justify-center mt-6' span={24}>
              <Form.Item style={{ marginBottom: 0 }}>
                <div className='md:min-w-[190px] w-full'>
                  <ButtonPrimary
                    buttonProps={{
                      disabled: accpectCondition.length < 1,
                      htmlType: "submit",
                      icon: <CreditCardFilled />,
                      children: "Đăng ký",
                      style: { width: "100%", height: "100%" },
                    }}
                  />
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </ConfigProvider>
  );
};

const LabelInput = ({ title, styles }: { title: string; styles?: CSSProperties }) => {
  return (
    <span className='text-base font-semibold text-black leading-normal' style={styles}>
      {title}
    </span>
  );
};

export default FormIndividualRegister;
