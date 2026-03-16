import PropTypes from 'prop-types';
import { useLayoutEffect, useRef } from 'react';
import { CloseIcon } from '../../../assets/icon';

const isParentPopup = (node) => {
    let currentNode = node;
    while (currentNode) {
        if (currentNode.dataset?.type === 'Popup') {
            return true;
        } else {
            currentNode = currentNode.parentNode;
        }
    }
    return false;
};

function Popup({ children, centered = false, hasArrowIndicator = false, onClose = null, className = null, autoClose = true, ...props }) {
    const popupRef = useRef(null);

    useLayoutEffect(() => {
        const handleKeyDown = (event) => {
            if (onClose && event.key === 'Escape') {
                onClose();
            }
        };

        const handleClick = (event) => {
            if (!popupRef.current || !onClose) {
                return;
            }

            if (isParentPopup(event.target)) {
                return;
            }

            onClose();
        };

        const timer = setTimeout(() => {
            if (autoClose) {
                document.addEventListener('mousedown', handleClick);
            }
            document.addEventListener('keydown', handleKeyDown);
        }, 100);

        return () => {
            if (autoClose) {
                clearTimeout(timer);
                document.removeEventListener('mousedown', handleClick);
            }
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [autoClose, onClose])

    const clsNames = ['pt-0 rounded shadow-md bg-gray-50 bg-opacity-75'];

    if (centered) {
        clsNames.push('fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2');
    } else {
        clsNames.push('fixed right-12');
    }

    if (hasArrowIndicator) {
        clsNames.push(`before:absolute before:left-[100%] before:content-[''] before:top-4 before:w-0 before:h-0 before:border-transparent before:border-l-white before:border-opacity-80 before:border-8`);
    }

    if (className) {
        clsNames.push(className);
    }

    return (
        <div ref={popupRef}
            {...props}
            className={clsNames.join(' ')}
            data-type="Popup"
        >
            {onClose && <div className="absolute top-2 right-2">
                <a onClick={onClose} data-track-name="关闭弹窗" data-testid="closePopupIcon"><CloseIcon fill="var(--text-secondary)" className="w-4 h-4 cursor-pointer" /></a>
            </div>}

            <div className="px-6 flex flex-col gap-4 mt-4 mb-4">
                {children}
            </div>
        </div>
    )
}

Popup.propTypes = {
    children: PropTypes.node.isRequired,
    centered: PropTypes.bool,
    hasArrowIndicator: PropTypes.bool,
    onClose: PropTypes.func,
    className: PropTypes.string,
    autoClose: PropTypes.bool
}

export default Popup;
