"use client";
import { colors } from "@/constants/colors";
import { useProductDispatch } from "@/context/product";
import { CloseOutlined, CreditCardFilled } from "@ant-design/icons";
import { Checkbox, ConfigProvider, Form, Input, Radio, RadioGroupProps, Select } from "antd";
import { CheckboxGroupProps } from "antd/lib/checkbox";
import { CSSProperties } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

const FormIndividualRegister = () => {
  const productDispatch = useProductDispatch();
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
      value: "test",
      label:
        "Bằng cách tích vào ô này, tôi đồng ý cung cấp và cho phép ngân hàng xử lý những dữ liệu trên để nhận thông báo từ SeABank.",
    },
  ];
  const onFinish = (values: any) => {
    console.log("values", values);
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
          Select: {
            paddingSM: 16,
            borderRadius: 12,
            fontSize: 16,
            controlHeight: 48,
            colorPrimary: colors.RED,
            colorBorder: colors.GRAY_BTN,
            colorTextPlaceholder: colors.GRAY_BTN,
            paddingContentHorizontal: 16,
            colorPrimaryHover: colors.RED,
            colorPrimaryBorder: colors.RED,
            controlOutline: colors.PRIMARY_OUTLINE,
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
          onClick={() => productDispatch?.({ type: "changeModalIndividual", payload: false })}
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
        <Form onFinish={onFinish} layout='vertical'>
          <WapperGroupField>
            <WapperItemField>
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
            </WapperItemField>
            <WapperItemField>
              <Form.Item label={<LabelInput title='Số điện thoại' />}>
                <Input placeholder={"Số điện thoại"} />
              </Form.Item>
            </WapperItemField>
          </WapperGroupField>
          <WapperGroupField>
            <WapperItemField>
              <Form.Item label={<LabelInput title='Giới tính' />}>
                <Radio.Group
                  options={optionRadioGender}
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                />
              </Form.Item>
            </WapperItemField>
            <WapperItemField>
              <Form.Item label={<LabelInput title='Email' />}>
                <Input placeholder={"Email"} />
              </Form.Item>
            </WapperItemField>
          </WapperGroupField>
          <WapperGroupField>
            <WapperItemField>
              <Form.Item label={<LabelInput title='Nơi ở' />}>
                <Select placeholder={"Chọn tỉnh thành"} />
              </Form.Item>
            </WapperItemField>
            <WapperItemField>
              <Form.Item label={<LabelInput title='Lĩnh vực quan tâm' />}>
                <Select placeholder={"Chọn lĩnh vực"} />
              </Form.Item>
            </WapperItemField>
          </WapperGroupField>
          <Form.Item label={<LabelInput title='Ghi chú' />}>
            <Input.TextArea placeholder={"Nhập nội dung"} />
          </Form.Item>
          <Form.Item>
            <Checkbox.Group
              options={optionCheckBox}
              style={{
                fontWeight: 500,
              }}
            />
          </Form.Item>
          <div className='md:flex md:justify-center'>
            <Form.Item style={{ marginBottom: 0 }}>
              <div className='md:min-w-[190px] w-full'>
                <ButtonPrimary
                  buttonProps={{
                    icon: <CreditCardFilled />,
                    htmlType: "submit",
                    children: "Đăng ký",
                    style: { width: "100%", height: "100%" },
                  }}
                />
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
};

const WapperGroupField = ({ children }: { children: React.ReactNode }) => {
  return <div className='md:flex md:gap-4'>{children}</div>;
};

const WapperItemField = ({ children }: { children: React.ReactNode }) => {
  return <div className='md:flex-1'>{children}</div>;
};

const LabelInput = ({ title, styles }: { title: string; styles?: CSSProperties }) => {
  return (
    <span className='text-base font-medium text-black leading-normal' style={styles}>
      {title}
    </span>
  );
};

export default FormIndividualRegister;
