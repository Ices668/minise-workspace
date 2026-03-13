import { XMarkIcon } from '@heroicons/react/24/outline';

function CloseButton({ onClose, ...props }) {
    return (
        <div className="absolute top-2 right-2" data-testid="closeButton">
            <button type="button" onClick={onClose} data-track-name="关闭弹窗" {...props}><XMarkIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" /></button>
        </div>
    );
}

export default CloseButton;
