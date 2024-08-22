"use client";
import { colors } from "@/constants/colors";
import { useAppDispatch } from "@/hooks/redux";
import { setChangeOpenModalSupport } from "@/stores/slices/product";
import { CloseOutlined, PaperClipOutlined } from "@ant-design/icons";
import {
  ProForm,
  ProFormCheckbox,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { ConfigProvider } from "antd";
import { CheckboxGroupProps } from "antd/lib/checkbox";
import { CSSProperties, useRef } from "react";
import ButtonComponent from "../buttons/ButtonComponent";
import ButtonPrimary from "../buttons/ButtonPrimary";

const FormSupport = () => {
  const formRef = useRef<ProFormInstance>(null);
  const dispatch = useAppDispatch();
  const optionCheckBox: CheckboxGroupProps["options"] = [
    {
      value: "1",
      label: "Nhận phản hồi qua điện thoại",
    },
    {
      value: "2",
      label: "Nhận phản hồi qua email",
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
          onClick={() => dispatch(setChangeOpenModalSupport(false))}
        >
          <CloseOutlined className='text-white text-xl' />
        </div>
        <div className='mb-4 flex flex-col gap-2 sm:items-center'>
          <h3 className='capitalize leading-7 bg-gradient-primary text-transparent bg-clip-text font-bold text-xl md:text-2xl'>
            Hỗ trợ chung
          </h3>
          <p className='leading-[18px] font-medium text-sm md:text-base sm:text-center'>
            <span className='text-black'>Cổng thông tin chăm sóc Khách hàng đầu tiên trên thị trường</span>
            <span className='text-transparent bg-gradient-primary bg-clip-text ml-1 font-semibold capitalize'>
              Ngân Hàng
            </span>
          </p>
        </div>
        <ProForm formRef={formRef} onFinish={onFinish} grid rowProps={{ gutter: { md: 16 } }} submitter={false}>
          <ProForm.Group colProps={{ xs: { span: 24 }, md: { span: 12 } }}>
            <ProForm.Group
              title={"1. Chọn sản phẩm / Dịch vụ cần hỗ trợ"}
              titleRender={(title: React.ReactNode) => <TitleGroupFields title={title} />}
              titleStyle={{ marginBottom: 0 }}
            >
              <ProFormSelect placeholder={"Chọn sản phẩm"} label={<LabelInput title='Sản phẩm' />} />
              <ProFormSelect placeholder={"Chọn dịch vụ"} label={<LabelInput title='Dịch vụ cần hỗ trợ' />} />
            </ProForm.Group>
            <ProForm.Group
              title={"2. Nhập thông tin khách hàng"}
              titleStyle={{ marginBottom: 0 }}
              titleRender={(title: React.ReactNode) => <TitleGroupFields title={title} />}
            >
              <ProFormText name={"name"} placeholder={"Nhập họ và tên"} label={<LabelInput title='Họ và tên' />} />
              <ProFormText placeholder={"Số điện thoại"} label={<LabelInput title='Nhập số điện thoại' />} />
              <ProFormText placeholder={"Email"} label={<LabelInput title='Nhập email' />} />
            </ProForm.Group>
          </ProForm.Group>
          <ProForm.Group colProps={{ xs: { span: 24 }, md: { span: 12 } }}>
            <ProForm.Group
              title={"3. Nội dung cần hỗ trợ"}
              titleStyle={{ marginBottom: 0 }}
              titleRender={(title: React.ReactNode) => (
                <TitleGroupFields
                  title={title}
                  subTitle='SeABank cam kết bảo mật toàn bộ các thông tin cá nhân của Khách hàng đã đăng ký với ngân hàng. Tuy nhiên, để tránh việc thông tin có thể bị khai thác trên đường truyền tin. Quý khách vui lòng KHÔNG ĐIỀN những thông tin cá nhân quan trọng cần bảo mật (mã CVV, tên truy cập, mật khẩu, mã PIN, mã OTP...) vào mục nội dung cần hỗ trợ.'
                />
              )}
            >
              <ProFormTextArea
                label={<LabelInput title='Nội dung' />}
                placeholder={"Nhập nội dung"}
                fieldProps={{
                  autoSize: { maxRows: 8, minRows: 4 },
                }}
              />
              <ProForm.Item>
                <div className='flex gap-2'>
                  <PaperClipOutlined className='[rotate:135deg] text-base' />
                  <p className='text-sm font-medium'>
                    <span className='mr-1 underline text-red hover:cursor-pointer'>Đính kèm file</span>
                    <span>
                      (Tài liệu đính kèm là file *.jpg, *.jpeg, *.png, *.docx, *.pdf, *.xlsx có tổng dung lượng tối đa
                      3MB)
                    </span>
                  </p>
                </div>
              </ProForm.Item>
            </ProForm.Group>
            <ProForm.Group
              title={"4. Lựa chọn phương thức phản hồi từ ngân hàng"}
              titleRender={(title: React.ReactNode) => <TitleGroupFields title={title} />}
              titleStyle={{ marginBottom: 0 }}
            >
              <ProFormCheckbox.Group options={optionCheckBox} fieldProps={{ style: { fontWeight: 500 } }} />
              <div className='flex gap-2 w-full md:w-[250px] h-12'>
                <ButtonComponent
                  title='Làm lại'
                  styles={{ width: "100%" }}
                  onClick={() => formRef.current?.setFields}
                />
                <ButtonPrimary
                  buttonProps={{
                    onClick: () => formRef.current?.submit(),
                    children: "Gửi yêu cầu",
                    style: { width: "100%" },
                  }}
                />
              </div>
            </ProForm.Group>
          </ProForm.Group>
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

const TitleGroupFields = ({ title, subTitle }: { title: React.ReactNode; subTitle?: string }) => {
  return (
    <div className='mb-2 md:mb-4 pl-1'>
      <p className='text-base bg-gradient-primary bg-clip-text text-transparent font-semibold mb-2'>{title}</p>
      <p className='text-sm font-medium leading-[22px]'>{subTitle}</p>
    </div>
  );
};
export default FormSupport;
