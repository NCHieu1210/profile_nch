import { Input, Space, Button, Tooltip, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';


const ButtonCopy = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    navigator.clipboard.writeText(props.text)
    messageApi.open({
      type: 'success',
      content: 'Đã sao chép vào bộ nhớ tạm!',
    });
  };

  return (
    <>
      {contextHolder}
      <Space.Compact block>
        <Input disabled={true}
          style={{
            // width: 'calc(100% - 200px)',
          }}
          defaultValue={`STK: ${props.text}`}
        />
        <Tooltip title="Sao chép STK">
          <Button onClick={success}><CopyOutlined />Copy</Button>
        </Tooltip>
      </Space.Compact>
    </>);
}
export default ButtonCopy;
{/* <CopyOutlined /> */ }
// defaultValue = "git@github.com:ant-design/ant-design.git"