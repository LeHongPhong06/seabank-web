"use client";
import { colors } from "@/constants/colors";
import { useProductDispatch } from "@/context/product";
import { CloseOutlined, PaperClipOutlined } from "@ant-design/icons";
import { Checkbox, ConfigProvider, Form, Input, Select } from "antd";
import { CheckboxGroupProps } from "antd/lib/checkbox";
import { CSSProperties } from "react";
import ButtonComponent from "../buttons/ButtonComponent";
import ButtonPrimary from "../buttons/ButtonPrimary";

const FormSupport = () => {
  const [formRef] = Form.useForm();
  const productDispatch = useProductDispatch();
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
          onClick={() => productDispatch?.({ type: "changeModalSupport", payload: false })}
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
        <Form onFinish={onFinish} layout='vertical' form={formRef}>
          <div className='flex flex-col md:flex-row md:gap-4'>
            <div className='flex-1'>
              <TitleGroupField title={"1. Chọn sản phẩm / Dịch vụ cần hỗ trợ"} />
              <WapperItemField>
                <Form.Item label={<LabelInput title='Sản phẩm' />}>
                  <Select placeholder={"Chọn sản phẩm"} />
                </Form.Item>
              </WapperItemField>
              <WapperItemField>
                <Form.Item label={<LabelInput title='Dịch vụ cần hỗ trợ' />}>
                  <Select placeholder={"Chọn dịch vụ"} />
                </Form.Item>
              </WapperItemField>
              <TitleGroupField title={"2. Nhập thông tin khách hàng"} />
              <WapperItemField>
                <Form.Item label={<LabelInput title='Họ và tên' />}>
                  <Input placeholder={"Nhập họ và tên"} />
                </Form.Item>
              </WapperItemField>
              <WapperItemField>
                <Form.Item label={<LabelInput title='Số điện thoại' />}>
                  <Input placeholder={"Nhập số điện thoại"} />
                </Form.Item>
              </WapperItemField>
              <WapperItemField>
                <Form.Item label={<LabelInput title='Email' />}>
                  <Input placeholder={"Nhập email"} />
                </Form.Item>
              </WapperItemField>
            </div>
            <div className='flex-1'>
              <TitleGroupField
                title={"3. Nội dung cần hỗ trợ"}
                subTitle='SeABank cam kết bảo mật toàn bộ các thông tin cá nhân của Khách hàng đã đăng ký với ngân hàng. Tuy nhiên, để tránh việc thông tin có thể bị khai thác trên đường truyền tin. Quý khách vui lòng KHÔNG ĐIỀN những thông tin cá nhân quan trọng cần bảo mật (mã CVV, tên truy cập, mật khẩu, mã PIN, mã OTP...) vào mục nội dung cần hỗ trợ.'
              />
              <WapperItemField>
                <Form.Item label={<LabelInput title='Nội dung' />}>
                  <Input.TextArea placeholder={"Nhập nội dung"} />
                </Form.Item>
              </WapperItemField>
              <Form.Item>
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
              </Form.Item>
              <TitleGroupField title={"4. Lựa chọn phương thức phản hồi từ ngân hàng"} />
              <WapperItemField>
                <Form.Item>
                  <Checkbox.Group
                    options={optionCheckBox}
                    style={{
                      gap: 6,
                      fontWeight: 500,
                    }}
                  />
                </Form.Item>
              </WapperItemField>
              <div className='flex gap-2 w-full md:w-[250px] h-12'>
                <ButtonComponent title='Làm lại' styles={{ width: "100%" }} />
                <ButtonPrimary
                  buttonProps={{
                    onClick: () => formRef.submit(),
                    children: "Gửi yêu cầu",
                    style: { width: "100%" },
                  }}
                />
              </div>
            </div>
          </div>
        </Form>
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

const TitleGroupField = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className='mb-2 md:mb-3'>
      <p className='text-base bg-gradient-primary bg-clip-text text-transparent font-semibold mb-2 pl-1'>{title}</p>
      <p className='text-sm font-medium leading-[22px]'>{subTitle}</p>
    </div>
  );
};

const WapperItemField = ({ children }: { children: React.ReactNode }) => {
  return <div className='md:flex-1'>{children}</div>;
};

export default FormSupport;
