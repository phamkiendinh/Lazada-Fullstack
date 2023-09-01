const OrderIcon = ({ classes, width = '18', color }) => (
    <svg className={classes} width={width} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14 8H4V6H14V8ZM14 12H4V10H14V12ZM11 16H4V14H11V16ZM9 2C9.26522 2 9.51957 2.10536 9.70711 2.29289C9.89464 2.48043 10 2.73478 10 3C10 3.26522 9.89464 3.51957 9.70711 3.70711C9.51957 3.89464 9.26522 4 9 4C8.73478 4 8.48043 3.89464 8.29289 3.70711C8.10536 3.51957 8 3.26522 8 3C8 2.73478 8.10536 2.48043 8.29289 2.29289C8.48043 2.10536 8.73478 2 9 2V2ZM16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2Z"
            fill={color}
        />
    </svg>
);

export default OrderIcon;