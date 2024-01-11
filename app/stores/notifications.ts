export const useNotificationStore = definePiniaStore('notifications', () => {
  const notifications = ref<any[]>([]);

  function addNotification(notification) {
    notifications.value.push(notification);
    setTimeout(() => {
      removeNotification(notification);
    }, 15000); // 15000 milliseconds = 15 seconds
  };

  function removeNotification(notification) {
    const index = notifications.value.indexOf(notification);
    if (index !== -1) {
      notifications.value.splice(index, 1);
    }
  };

  function closeNotification(notification) {
    notifications.value = notifications.value.filter(n => n !== notification);
  };
  return { notifications, addNotification, closeNotification };
});
