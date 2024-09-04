"use client";
import file from "@/assets/images/icons/file.svg";
import { colors } from "@/constants/colors";
import { ProductContext } from "@/context/product";
import { notificationSuccessForm } from "@/utils/notification";
import { CloseOutlined, DeleteOutlined, FileOutlined } from "@ant-design/icons";
import {
  Checkbox,
  Col,
  ConfigProvider,
  Form,
  GetProp,
  Input,
  message,
  Row,
  SelectProps,
  Upload,
  UploadProps,
} from "antd";
import { CheckboxGroupProps } from "antd/lib/checkbox";
import Image from "next/image";
import React, { CSSProperties, useContext } from "react";
import ButtonComponent from "../buttons/ButtonComponent";
import ButtonPrimary from "../buttons/ButtonPrimary";
import SelectForm from "../selects/SelectForm";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const FormSupport = () => {
  const [formRef] = Form.useForm();
  const productContext = useContext(ProductContext);
  const { dispatch } = productContext;
  const optionCheckBox: CheckboxGroupProps["options"] = [
    {
      value: "phone",
      label: "Nhận phản hồi qua điện thoại",
    },
    {
      value: "email",
      label: "Nhận phản hồi qua email",
    },
  ];
  const optionProducts: SelectProps["options"] = [
    {
      label: "Thẻ tín dụng",
      value: 1,
    },
    {
      label: "Thẻ ghi nợ",
      value: 2,
    },
  ];
  const onBeforeUpload = (file: FileType) => {
    const isLt3M = file.size / 1024 / 1024 < 3;
    if (!isLt3M) {
      message.error({
        content: "Image must smaller than 3MB!",
      });
      return false;
    }
    formRef.setFieldsValue({ file });
    return true;
  };
  const onFinish = (values: any) => {
    console.log("values", values);
    notificationSuccessForm();
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
            colorPrimaryBorderHover: colors.GRAY_BTN,
            colorPrimary: "rgba(221, 26, 28, 0.5)",
          },
        },
      }}
    >
      <div className='relative px-4 py-6 sm:px-16 sm:py-12'>
        <div
          className='absolute left-0 right-0 mx-auto size-14 -translate-y-24 sm:-translate-y-32 bg-[rgba(0,_0,_0,_0.65)] flex justify-center items-center rounded-full hover:cursor-pointer hover:bg-black'
          onClick={() => dispatch?.({ type: "changeModalSupport", payload: { modalCustomerSupport: false } })}
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
        <Form layout='vertical' onFinish={onFinish} form={formRef} className='register-advise-form'>
          <Row
            gutter={[
              { xs: 0, md: 16 },
              { xs: 16, sm: 16, md: 0 },
            ]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Row gutter={[0, { xs: 8, sm: 16, md: 24 }]}>
                <Col span={24}>
                  <Row gutter={[0, { xs: 8, sm: 16 }]}>
                    <Col span={24}>
                      <TitleGroupField title={"1. Chọn sản phẩm / Dịch vụ cần hỗ trợ"} />
                    </Col>
                    <Col span={24}>
                      <Form.Item label={<LabelInput title='Sản phẩm' />}>
                        <SelectForm placeholder={"Chọn sản phẩm"} options={optionProducts} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label={<LabelInput title='Dịch vụ cần hỗ trợ' />}>
                        <SelectForm placeholder={"Chọn dịch vụ"} options={optionProducts} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row gutter={[0, { xs: 8, sm: 16 }]}>
                    <Col span={24}>
                      <TitleGroupField title={"2. Nhập thông tin khách hàng"} />
                    </Col>
                    <Col span={24}>
                      <Form.Item label={<LabelInput title='Họ và tên' />} name={"fullName"}>
                        <Input placeholder={"Nhập họ và tên"} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label={<LabelInput title='Số điện thoại' />} name={"phone"}>
                        <Input placeholder={"Nhập số điện thoại"} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label={<LabelInput title='Email' />} name={"email"}>
                        <Input placeholder={"Nhập email"} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Row gutter={[0, { xs: 8, sm: 16, md: 24 }]}>
                <Col span={24}>
                  <Row gutter={[0, { xs: 8, sm: 16 }]}>
                    <Col span={24}>
                      <TitleGroupField
                        title={"3. Nội dung cần hỗ trợ"}
                        subTitle='SeABank cam kết bảo mật toàn bộ các thông tin cá nhân của Khách hàng đã đăng ký với ngân hàng. Tuy nhiên, để tránh việc thông tin có thể bị khai thác trên đường truyền tin. Quý khách vui lòng KHÔNG ĐIỀN những thông tin cá nhân quan trọng cần bảo mật (mã CVV, tên truy cập, mật khẩu, mã PIN, mã OTP...) vào mục nội dung cần hỗ trợ.'
                      />
                    </Col>
                    <Col span={24}>
                      <Form.Item label={<LabelInput title='Nội dung' />} name={"content"}>
                        <Input.TextArea placeholder={"Nhập nội dung"} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name={"file"}>
                        <FormItemChooseFile
                          onBeforeUpload={onBeforeUpload}
                          value={formRef.getFieldValue("file")}
                          onDelele={() =>
                            formRef.setFieldsValue({
                              file: undefined,
                            })
                          }
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row gutter={[0, { xs: 8, sm: 16 }]}>
                    <Col span={24}>
                      <TitleGroupField title={"4. Lựa chọn phương thức phản hồi từ ngân hàng"} />
                    </Col>
                    <Col span={24}>
                      <Form.Item name={"options"}>
                        <Checkbox.Group options={optionCheckBox} style={{ fontWeight: 500, gap: 6 }} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <div className='flex gap-2 w-full md:w-[250px] h-12'>
                    <ButtonComponent title='Làm lại' styles={{ width: "100%" }} onClick={() => formRef.resetFields()} />
                    <ButtonPrimary
                      buttonProps={{
                        htmlType: "submit",
                        children: "Gửi yêu cầu",
                        style: { width: "100%" },
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    </ConfigProvider>
  );
};

const FormItemChooseFile = ({
  value,
  onBeforeUpload,
  onDelele,
}: {
  value?: FileType;
  onBeforeUpload: (file: FileType) => boolean;
  onDelele: () => void;
}) => {
  const formatFileSize = () => {
    if (value) {
      const kilobytes = value.size / 1024;
      const megabytes = kilobytes / 1024;
      if (megabytes >= 1) {
        return `${megabytes.toFixed(2)} MB`;
      } else {
        return `${kilobytes.toFixed(2)} KB`;
      }
    }
  };
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-2 lg:gap-4'>
        <div className='min-w-4'>
          <div className='relative w-full h-4 mt-[6px]'>
            <Image src={file} alt='icon-file' fill />
          </div>
        </div>
        <div className='text-sm font-medium'>
          <Upload
            showUploadList={false}
            multiple={false}
            accept='.xls,.xlsx,.pdf,.docx,.doc,.jpg, .jpeg, .png, .gif, .bmp'
            beforeUpload={onBeforeUpload}
          >
            <span className='mr-1 underline text-red hover:cursor-pointer text-nowrap'>Đính kèm file</span>
          </Upload>
          <span>
            (Tài liệu đính kèm là file *.jpg, *.jpeg, *.png, *.docx, *.pdf, *.xlsx có tổng dung lượng tối đa 3MB)
          </span>
        </div>
      </div>
      {value && (
        <div className='rounded-xl p-[1px] bg-gradient-primary'>
          <div className='bg-white flex gap-4 rounded-[11px] px-3 py-2'>
            <FileOutlined className='text-xl' />
            <div className='text-black flex-1 font-medium'>
              <p>{value.name}</p>
              <p>{formatFileSize()}</p>
            </div>
            <DeleteOutlined className='text-xl text-primary' onClick={onDelele} />
          </div>
        </div>
      )}
    </div>
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
    <div>
      <p className='text-base leading- bg-gradient-primary bg-clip-text text-transparent font-semibold pl-1'>{title}</p>
      {subTitle && <p className='text-sm font-medium leading-[22px] mt-2'>{subTitle}</p>}
    </div>
  );
};

export default FormSupport;
