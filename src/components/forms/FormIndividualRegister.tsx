"use client";
import { colors } from "@/constants/colors";
import { useAppDispatch } from "@/hooks/redux";
import { setChangeOpenModalInvidualRegister } from "@/stores/slices/product";
import { CloseOutlined, CreditCardFilled } from "@ant-design/icons";
import {
  ProForm,
  ProFormCheckbox,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { ConfigProvider, RadioGroupProps } from "antd";
import { CheckboxGroupProps } from "antd/lib/checkbox";
import { CSSProperties } from "react";
import ButtonComponent from "../buttons/ButtonComponent";

const FormIndividualRegister = () => {
  const dispatch = useAppDispatch();
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
          onClick={() => dispatch(setChangeOpenModalInvidualRegister(false))}
        >
          <CloseOutlined className='text-white text-xl' />
        </div>
        <div className='mb-4 md:flex md:flex-col gap-[10px]  md:items-center'>
          <h3 className='capitalize leading-7 bg-gradient-primary text-transparent bg-clip-text font-bold text-xl md:text-2xl'>
            Đăng ký tư vấn
          </h3>
          <p className='leading-[18px] font-semibold text-sm md:text-base md:text-center'>
            <span className='text-black'>SeABank mang đến giải pháp tài chính phù hợp cho</span>
            <span className='text-red ml-1'>Cá nhân</span>
          </p>
        </div>
        <ProForm
          onFinish={onFinish}
          submitter={{
            render(props, dom) {
              return (
                <div className='md:flex md:justify-center'>
                  <div className='w-full md:w-[190px] h-12'>
                    <ButtonComponent
                      onClick={() => props.submit()}
                      preffix={<CreditCardFilled />}
                      title='Đăng ký'
                      active
                      styles={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              );
            },
          }}
          grid
          rowProps={{ gutter: { md: 16 } }}
        >
          <ProFormText
            rules={[
              {
                required: true,
                message: "Please enter name",
              },
            ]}
            name={"fullName"}
            placeholder={"Họ và tên"}
            label={<LabelInput title='Họ và tên' />}
            colProps={{ xs: 24, md: 12 }}
          />
          <ProFormText
            placeholder={"Số điện thoại"}
            label={<LabelInput title='Số điện thoại' />}
            colProps={{ xs: 24, md: 12 }}
          />
          <ProFormRadio.Group
            label={<LabelInput title='Giới tính' />}
            options={optionRadioGender}
            colProps={{ xs: 24, md: 12 }}
          />
          <ProFormText placeholder={"Email"} label={<LabelInput title='Email' />} colProps={{ xs: 24, md: 12 }} />
          <ProFormSelect
            placeholder={"Chọn tỉnh thành"}
            label={<LabelInput title='Nơi ở' />}
            colProps={{ xs: 24, md: 12 }}
          />
          <ProFormSelect
            placeholder={"Chọn lĩnh vực"}
            label={<LabelInput title='Lĩnh vực quan tâm' />}
            colProps={{ xs: 24, md: 12 }}
          />
          <ProFormTextArea label={<LabelInput title='Ghi chú' />} placeholder={"Nhập nội dung"} />
          <ProFormCheckbox.Group
            options={optionCheckBox}
            fieldProps={{
              style: { fontWeight: 500 },
            }}
          />
        </ProForm>
      </div>
    </ConfigProvider>
  );
};

const LabelInput = ({ title, styles }: { title: string; styles?: CSSProperties }) => {
  return (
    <span className='text-base font-medium text-black leading-normal' style={styles}>
      {title}
    </span>
  );
};

export default FormIndividualRegister;
