import { XMarkIcon, ClockIcon } from '@heroicons/react/24/outline';

function ServerHistoryModal({ isOpen, onClose }) {
    // 模拟操作历史数据（包含所有实例，包括已释放的）
    const operationHistory = [
        {
            id: 1,
            operation: 'create',
            description: '创建服务器实例 - 开发服务器-01',
            serverName: '开发服务器-01',
            timestamp: '2024-12-15 10:30:25',
            operator: '用户操作',
            status: 'success'
        },
        {
            id: 2,
            operation: 'start',
            description: '启动服务器 - 开发服务器-01',
            serverName: '开发服务器-01',
            timestamp: '2024-12-15 10:31:15',
            operator: '用户操作',
            status: 'success'
        },
        {
            id: 3,
            operation: 'create',
            description: '创建服务器实例 - 测试服务器-01',
            serverName: '测试服务器-01',
            timestamp: '2024-12-15 11:20:30',
            operator: '用户操作',
            status: 'success'
        },
        {
            id: 4,
            operation: 'restart',
            description: '重启服务器 - 开发服务器-01',
            serverName: '开发服务器-01',
            timestamp: '2024-12-15 14:20:30',
            operator: '用户操作',
            status: 'success'
        },
        {
            id: 5,
            operation: 'delete',
            description: '释放服务器 - 测试服务器-01',
            serverName: '测试服务器-01',
            timestamp: '2024-12-15 16:45:20',
            operator: '用户操作',
            status: 'success'
        },
        {
            id: 6,
            operation: 'snapshot',
            description: '创建快照 - 开发服务器-01',
            serverName: '开发服务器-01',
            timestamp: '2024-12-16 09:15:45',
            operator: '系统自动',
            status: 'success'
        },
        {
            id: 7,
            operation: 'create',
            description: '创建服务器实例 - 生产服务器-01',
            serverName: '生产服务器-01',
            timestamp: '2024-12-16 14:30:10',
            operator: '用户操作',
            status: 'success'
        },
        {
            id: 8,
            operation: 'stop',
            description: '关闭服务器 - 开发服务器-01',
            serverName: '开发服务器-01',
            timestamp: '2024-12-16 18:20:35',
            operator: '用户操作',
            status: 'success'
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'success':
                return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20';
            case 'failed':
                return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20';
            case 'pending':
                return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20';
            default:
                return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20';
        }
    };

    const getOperationIcon = (operation) => {
        switch (operation) {
            case 'create':
                return '🆕';
            case 'start':
                return '▶️';
            case 'stop':
                return '⏸️';
            case 'restart':
                return '🔄';
            case 'delete':
                return '🗑️';
            case 'snapshot':
                return '📸';
            case 'backup':
                return '💾';
            default:
                return '📋';
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
                {/* 模态框头部 */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                    <ClockIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-3" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            所有操作历史
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            包含当前和已释放的服务器实例
                        </p>
                    </div>
                </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                {/* 操作历史列表 */}
                <div className="p-6 overflow-y-auto max-h-[60vh]">
                    {operationHistory.length === 0 ? (
                        <div className="text-center py-8">
                            <div className="text-gray-400 dark:text-gray-600 text-4xl mb-4">
                                📋
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">
                                暂无操作记录
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {operationHistory.map(record => (
                                <div key={record.id} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                    <div className="text-2xl">
                                        {getOperationIcon(record.operation)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <div className="min-w-0">
                                                <h4 className="font-medium text-gray-900 dark:text-white truncate">
                                                    {record.description}
                                                </h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                                    服务器: {record.serverName}
                                                </p>
                                            </div>
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                                                {record.status === 'success' ? '成功' : 
                                                 record.status === 'failed' ? '失败' : 
                                                 record.status === 'pending' ? '进行中' : '未知'}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                                            <p>操作时间: {record.timestamp}</p>
                                            <p>操作者: {record.operator}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* 底部按钮 */}
                <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                        关闭
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServerHistoryModal;