import { observer } from 'mobx-react-lite';
import { UserIcon } from '@heroicons/react/24/outline';
import { useStore } from '../context';
import Warning from '../../../common/components/Warning';

function Login() {
    const store = useStore();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !!store.password) {
            store.login();
        }
    };

    return (<div className="flex w-[100vw] h-[100vh]">
        <div className="flex flex-col relative w-[50vw] h-[100vh] bg-loginBg bg-cover bg-center">
            <div className="bg-gray-900/50 absolute w-full h-full blur-0" />
            <div className="absolute flex flex-col items-center justify-center top-0 bottom-0 left-0 right-0">
                <div className="text-xl font-semibold text-[rgba(255,255,255,.75)]">欢迎使用</div>
                <div className="text-[56px] font-bold text-white text-center">天像云计算自助服务系统</div>
            </div>
        </div>
        <div className="flex w-[50vw] h-[100vh] items-center justify-center">
            <div className="w-[48%]">
                <h1 className="text-4xl font-bold text-center mb-10 text-primary-text">登录</h1>
                <div className="flex gap-y-6 flex-col items-center justify-center">
                    <input type="text"
                        required
                        className="login-input w-full"
                        placeholder="用户名或邮箱"
                        value={store.username}
                        onChange={e => store.setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        required
                        className="login-input w-full"
                        placeholder="密码"
                        value={store.password}
                        onKeyDown={handleKeyDown}
                        onChange={e => store.setPassword(e.target.value)}
                    />
                    {store.errorMessage && <Warning text={store.errorMessage} />}
                    <button
                        type="button"
                        className="button button-primary button-login w-full mt-4 flex items-center justify-center gap-x-2"
                        data-track-name="点击登录"
                        onClick={store.login}>
                        <UserIcon className="w-5 h-5" />
                        登录
                    </button>
                </div>
            </div>
        </div>
    </div>);
}

const LoginHoc = observer(Login);
export default LoginHoc;
