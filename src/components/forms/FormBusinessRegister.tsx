"use client";
import { colors } from "@/constants/colors";
import { ProductContext } from "@/context/product";
import { CloseOutlined, CreditCardFilled } from "@ant-design/icons";
import { ConfigProvider, Form, Input, Select } from "antd";
import { CSSProperties, useContext } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

const FormBusinessRegister = () => {
  const productContext = useContext(ProductContext);
  const { dispatch } = productContext;
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
            controlOutline: "rgba(221, 27, 28, 0.1)",
          },
        },
      }}
    >
      <div className='relative px-4 py-6 sm:px-16 sm:py-12'>
        <div
          className='absolute left-0 right-0 mx-auto size-14 -translate-y-24 sm:-translate-y-32 bg-[rgba(0,_0,_0,_0.65)] flex justify-center items-center rounded-full hover:cursor-pointer hover:bg-black'
          onClick={() => dispatch?.({ type: "changeModalBusiness", payload: { modalBusinessRegister: false } })}
        >
          <CloseOutlined className='text-white text-xl' />
        </div>
        <div className='mb-4 md:flex md:flex-col gap-[10px] md:items-center'>
          <h3 className='capitalize leading-7 bg-gradient-primary text-transparent bg-clip-text font-bold text-xl md:text-2xl'>
            Đăng ký tư vấn
          </h3>
          <p className='leading-[18px] font-semibold text-sm md:text-base md:text-center'>
            <span className='text-black'>SeABank mang đến giải pháp tài chính phù hợp cho</span>
            <span className='text-transparent bg-gradient-primary bg-clip-text ml-1 font-semibold capitalize'>
              Doanh nghiệp
            </span>
          </p>
        </div>
        <Form layout='vertical'>
          <WapperGroupField>
            <WapperItemField>
              <Form.Item
                label={<LabelInput title='Tên doanh nghiệp' />}
                rules={[
                  {
                    required: true,
                    message: (
                      <span className='bg-gradient-primary text-transparent bg-clip-text text-base font-medium leading-[22px]'>
                        Please enter name
                      </span>
                    ),
                  },
                ]}
              >
                <Input name={"companyName"} placeholder={"Tên doanh nghiệp"} />
              </Form.Item>
            </WapperItemField>
            <WapperItemField>
              <Form.Item label={<LabelInput title='Mã số doanh nghiệp' />} name={"taxCode"}>
                <Input placeholder={"Mã số doanh nghiệp"} />
              </Form.Item>
            </WapperItemField>
          </WapperGroupField>
          <WapperGroupField>
            <WapperItemField>
              <Form.Item label={<LabelInput title='Tỉnh thành' />} name={"province"}>
                <Select placeholder={"Chọn tỉnh thành"} />
              </Form.Item>
            </WapperItemField>
            <WapperItemField>
              <Form.Item label={<LabelInput title='Người liên hệ' />} name={"fullName"}>
                <Input placeholder={"Người liên hệ"} />
              </Form.Item>
            </WapperItemField>
          </WapperGroupField>
          <WapperGroupField>
            <WapperItemField>
              <Form.Item label={<LabelInput title='Số điện thoại' />} name={"phone"}>
                <Input placeholder={"Số điện thoại"} />
              </Form.Item>
            </WapperItemField>
            <WapperItemField>
              <Form.Item label={<LabelInput title='Email' />} name={"email"}>
                <Input placeholder={"Email"} />
              </Form.Item>
            </WapperItemField>
          </WapperGroupField>
          <div className='md:w-[calc(50%-8px)]'>
            <Form.Item label={<LabelInput title='Sản phẩm cần tư vấn' />} name={"referral"}>
              <Select placeholder={"Sản phẩm cần tư vấn"} />
            </Form.Item>
          </div>
          <div className='md:flex md:justify-center'>
            <Form.Item style={{ marginBottom: 0 }}>
              <div className='md:min-w-[190px] w-full'>
                <ButtonPrimary
                  buttonProps={{
                    icon: <CreditCardFilled />,
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
export default FormBusinessRegister;
