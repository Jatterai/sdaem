import { TIcon } from "../types"

export const TelegramIcon = ({ className }: TIcon) => {
	return (
		<>
			<svg className={className} width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.0172 0.246571L0.704696 4.99449C-0.135581 5.33199 -0.13072 5.80074 0.55053 6.00977L3.71164 6.99588L11.0255 2.38129C11.3714 2.17088 11.6873 2.28407 11.4276 2.51463L5.50192 7.86255H5.50053L5.50192 7.86324L5.28386 11.1216C5.60331 11.1216 5.74428 10.975 5.92345 10.8021L7.45886 9.30907L10.6526 11.6681C11.2415 11.9924 11.6644 11.8257 11.8109 11.123L13.9075 1.2424C14.1221 0.381988 13.579 -0.00759572 13.0172 0.246571Z" fill="white" />
			</svg>
		</>
	)
}

export const ClockIcon = ({ className }: TIcon) => {
	return (
		<>
			<svg className={className} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_2831_1344)">
					<path d="M7.5 0C3.36443 0 0 3.36443 0 7.5C0 11.6356 3.36443 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36443 11.6356 0 7.5 0ZM7.5 13.3607C4.26835 13.3607 1.63934 10.7317 1.63934 7.5C1.63934 4.26851 4.26835 1.63934 7.5 1.63934C10.7317 1.63934 13.3607 4.26851 13.3607 7.5C13.3607 10.7317 10.7317 13.3607 7.5 13.3607Z" fill="white" />
					<path d="M8.14909 7.5093V4.36588C8.14909 4.01489 7.86467 3.73047 7.51382 3.73047C7.16286 3.73047 6.87842 4.01489 6.87842 4.36588V7.71229C6.87842 7.72228 6.88088 7.73166 6.88136 7.74165C6.87301 7.91443 6.93253 8.08985 7.06448 8.22183L9.43088 10.5881C9.67909 10.8363 10.0814 10.8363 10.3294 10.5881C10.5774 10.3399 10.5776 9.93757 10.3294 9.68953L8.14909 7.5093Z" fill="white" />
				</g>
				<defs>
					<clipPath id="clip0_2831_1344">
						<rect width="15" height="15" fill="white" />
					</clipPath>
				</defs>
			</svg>

		</>
	)
}

export const AlertIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M17.5 0C7.875 0 0 7.875 0 17.5C0 27.125 7.875 35 17.5 35C27.125 35 35 27.125 35 17.5C35 7.875 27.125 0 17.5 0ZM17.5 3.5C19.425 3.5 20.825 5.075 20.65 7L19.25 21H15.75L15.05 14L14.35 7C14.175 5.075 15.575 3.5 17.5 3.5ZM17.5 31.5C15.575 31.5 14 29.925 14 28C14 26.075 15.575 24.5 17.5 24.5C19.425 24.5 21 26.075 21 28C21 29.925 19.425 31.5 17.5 31.5Z" />
		</svg>
	)
}

export const UserIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_2831_1302)">
				<path d="M10.0013 0C7.14418 0 4.80859 2.33559 4.80859 5.19275C4.80859 8.04991 7.14418 10.3855 10.0013 10.3855C12.8585 10.3855 15.1941 8.04991 15.1941 5.19275C15.1941 2.33559 12.8585 0 10.0013 0Z" />
				<path d="M18.913 14.536C18.7769 14.1959 18.5955 13.8784 18.3915 13.5836C17.3484 12.0416 15.7384 11.0212 13.9244 10.7718C13.6976 10.7492 13.4482 10.7945 13.2668 10.9305C12.3144 11.6335 11.1806 11.9963 10.0014 11.9963C8.82228 11.9963 7.68851 11.6335 6.73612 10.9305C6.5547 10.7945 6.30526 10.7265 6.07853 10.7718C4.26446 11.0212 2.63183 12.0416 1.61143 13.5836C1.40735 13.8784 1.22592 14.2186 1.0899 14.536C1.02189 14.6721 1.04454 14.8308 1.11256 14.9669C1.29398 15.2843 1.52071 15.6018 1.72479 15.8739C2.04224 16.3048 2.38239 16.6902 2.76789 17.053C3.08534 17.3705 3.44815 17.6653 3.81099 17.9601C5.60236 19.2979 7.75657 20.0009 9.97879 20.0009C12.201 20.0009 14.3552 19.2979 16.1466 17.9601C16.5094 17.688 16.8722 17.3705 17.1897 17.053C17.5525 16.6902 17.9153 16.3047 18.2328 15.8739C18.4595 15.5791 18.6636 15.2843 18.845 14.9669C18.9583 14.8308 18.981 14.672 18.913 14.536Z" />
			</g>
			<defs>
				<clipPath id="clip0_2831_1302">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>

	)
}

export const MailIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g opacity="1" clip-path="url(#clip0_2831_1315)">
				<path d="M15.937 15.6252C16.3304 15.6252 16.6713 15.4953 16.961 15.2389L12.003 10.2806C11.8841 10.3658 11.7688 10.4486 11.6598 10.5274C11.2888 10.8008 10.9877 11.0141 10.7564 11.167C10.5252 11.3202 10.2176 11.4763 9.8336 11.6357C9.44935 11.7954 9.09137 11.8749 8.75928 11.8749H8.74956H8.73984C8.40773 11.8749 8.04975 11.7954 7.66552 11.6357C7.2813 11.4763 6.97368 11.3202 6.7427 11.167C6.51149 11.0141 6.21051 10.8008 5.83929 10.5274C5.73584 10.4516 5.62111 10.3684 5.49707 10.2793L0.538086 15.2389C0.827817 15.4953 1.16889 15.6252 1.56223 15.6252H15.937Z" />
				<path d="M0.986433 7.15831C0.615429 6.91096 0.286427 6.62768 0 6.30859V13.8521L4.36999 9.48213C3.49574 8.87179 2.36932 8.09807 0.986433 7.15831Z" />
				<path d="M16.524 7.15831C15.1939 8.05861 14.0633 8.83366 13.1323 9.48388L17.5005 13.8523V6.30859C17.2205 6.62126 16.895 6.90436 16.524 7.15831Z" />
				<path d="M15.9377 1.875H1.56289C1.0614 1.875 0.675839 2.04435 0.405743 2.38269C0.135425 2.72119 0.000488281 3.14452 0.000488281 3.65221C0.000488281 4.0623 0.179557 4.50663 0.537535 4.98535C0.895513 5.46387 1.27643 5.83973 1.6801 6.11313C1.90139 6.26948 2.56874 6.73342 3.68213 7.50479C4.28317 7.92129 4.80585 8.28432 5.25502 8.5976C5.63787 8.86436 5.96805 9.09537 6.24066 9.28709C6.27195 9.30904 6.32117 9.34424 6.38649 9.39095C6.45687 9.4415 6.54592 9.50565 6.65579 9.58498C6.86736 9.738 7.04313 9.86169 7.18312 9.95618C7.32291 10.0507 7.49229 10.1563 7.691 10.2735C7.88954 10.3906 8.07681 10.4786 8.25257 10.5372C8.42837 10.5957 8.5911 10.6251 8.74081 10.6251H8.75054H8.76026C8.90994 10.6251 9.07271 10.5957 9.24854 10.5372C9.42427 10.4786 9.61137 10.3908 9.81008 10.2735C10.0086 10.1563 10.1777 10.0505 10.318 9.95618C10.458 9.86169 10.6337 9.73803 10.8453 9.58498C10.955 9.50565 11.044 9.44147 11.1144 9.39111C11.1798 9.34421 11.229 9.30923 11.2604 9.28709C11.4728 9.13931 11.8038 8.90925 12.2487 8.6003C13.0583 8.03777 14.2507 7.20982 15.8308 6.11313C16.306 5.78121 16.703 5.38066 17.0221 4.91205C17.3406 4.44344 17.5003 3.95189 17.5003 3.43756C17.5003 3.00784 17.3455 2.64014 17.0365 2.33389C16.7272 2.02802 16.3609 1.875 15.9377 1.875Z" />
			</g>
			<defs>
				<clipPath id="clip0_2831_1315">
					<rect width="17.5" height="17.5" fill="white" />
				</clipPath>
			</defs>
		</svg>

	)
}

export const LockerIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g opacity="1" clip-path="url(#clip0_2831_1613)">
				<path d="M15.625 8H15V5.5C15 2.7425 12.7575 0.5 10 0.5C7.2425 0.5 5 2.7425 5 5.5V8H4.375C3.34167 8 2.5 8.84083 2.5 9.875V18.625C2.5 19.6592 3.34167 20.5 4.375 20.5H15.625C16.6583 20.5 17.5 19.6592 17.5 18.625V9.875C17.5 8.84083 16.6583 8 15.625 8ZM6.66667 5.5C6.66667 3.66167 8.16167 2.16667 10 2.16667C11.8383 2.16667 13.3333 3.66167 13.3333 5.5V8H6.66667V5.5ZM10.8333 14.435V16.3333C10.8333 16.7933 10.4608 17.1667 10 17.1667C9.53917 17.1667 9.16667 16.7933 9.16667 16.3333V14.435C8.67083 14.1458 8.33333 13.6142 8.33333 13C8.33333 12.0808 9.08083 11.3333 10 11.3333C10.9192 11.3333 11.6667 12.0808 11.6667 13C11.6667 13.6142 11.3292 14.1458 10.8333 14.435Z" fill="#686868" />
			</g>
			<defs>
				<clipPath id="clip0_2831_1613">
					<rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
				</clipPath>
			</defs>
		</svg>

	)
}

export const PinIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_2831_2422)">
				<path d="M12.462 3.17459C11.3632 1.4441 9.54923 0.470703 7.50853 0.470703C5.48528 0.470703 3.67132 1.4441 2.5376 3.17459C1.40388 4.86902 1.14225 7.03212 1.83993 8.92484C2.03179 9.42957 2.3283 9.95232 2.71202 10.421L7.12481 15.7927C7.22946 15.9009 7.33412 15.973 7.49109 15.973C7.64807 15.973 7.75272 15.9009 7.85737 15.7927L12.2876 10.421C12.6713 9.95232 12.9853 9.44759 13.1597 8.92484C13.8574 7.03212 13.5957 4.86902 12.462 3.17459ZM7.50853 9.55575C6.00853 9.55575 4.77016 8.27591 4.77016 6.72568C4.77016 5.17546 6.00853 3.89562 7.50853 3.89562C9.00853 3.89562 10.2469 5.17546 10.2469 6.72568C10.2469 8.27591 9.02598 9.55575 7.50853 9.55575Z" fill="#BDBDBD" />
			</g>
			<defs>
				<clipPath id="clip0_2831_2422">
					<rect width="15" height="15.5023" fill="white" transform="translate(0 0.470703)" />
				</clipPath>
			</defs>
		</svg>

	)
}

export const MetroIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19.6401 15.4968H18.3812L14.4755 4.5293L9.99979 11.219L5.21594 4.6088L1.61882 15.4968H0.359905L0 16.9569H4.77911L6.65514 11.6193L10.0565 16.3138L10.0769 16.3433L10.0978 16.3138L13.3449 11.6193L15.2209 16.9569H20L19.6401 15.4968Z" fill="#BDBDBD" />
		</svg>

	)
}

export const StarIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9.94837 1.03827L11.9048 5.0025C12.1233 5.44522 12.5457 5.75207 13.0342 5.82306L17.409 6.45876C17.8191 6.51835 17.9829 7.02234 17.6861 7.3116L14.5205 10.3973C14.167 10.7419 14.0057 11.2384 14.0891 11.725L14.8364 16.0821C14.9065 16.4906 14.4778 16.8021 14.1109 16.6092L10.198 14.5521C9.76103 14.3223 9.23897 14.3223 8.80199 14.5521L4.88906 16.6092C4.52224 16.8021 4.09353 16.4906 4.16358 16.0821L4.91089 11.725C4.99434 11.2384 4.83302 10.7419 4.47949 10.3973L1.31386 7.3116C1.0171 7.02234 1.18086 6.51835 1.59097 6.45876L5.96576 5.82306C6.45432 5.75207 6.87667 5.44522 7.09517 5.0025L9.05163 1.03827C9.23504 0.666646 9.76496 0.666646 9.94837 1.03827Z" stroke="#F7C928" />
		</svg>

	)
}

export const PhoneIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7.72746 0L2.2729 0C1.33199 0 0.568359 0.763626 0.568359 1.70454V13.2955C0.568359 14.2364 1.33199 15 2.2729 15H7.72746C8.66836 15 9.43199 14.2364 9.43199 13.2955V1.70454C9.43199 0.763626 8.66836 0 7.72746 0ZM5.00019 14.3182C4.43427 14.3182 3.97746 13.8614 3.97746 13.2955C3.97746 12.7295 4.43427 12.2727 5.00019 12.2727C5.56611 12.2727 6.02292 12.7295 6.02292 13.2955C6.02292 13.8614 5.56608 14.3182 5.00019 14.3182ZM8.06837 11.5909H1.93201V2.04546H8.06837V11.5909Z" fill="black" />
		</svg>

	)
}

export const ViberIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7.90239 0.407538C6.63357 0.424676 3.90348 0.632959 2.37628 2.03228C1.24258 3.15939 0.84645 4.82104 0.800311 6.87884C0.760764 8.92872 0.714625 12.778 4.4255 13.8267V15.4218C4.4255 15.4218 4.40046 16.0611 4.8223 16.1929C5.34301 16.3577 5.63961 15.864 6.13396 15.3367L7.05673 14.2953C9.59437 14.5062 11.5388 14.0191 11.7629 13.9466C12.277 13.7819 15.1778 13.4121 15.6524 9.56214C16.1401 5.58695 15.4151 3.08227 14.11 1.94857L14.1034 1.94726C13.708 1.58474 12.1261 0.431267 8.58656 0.418084C8.58656 0.418084 8.32555 0.401606 7.90239 0.407538ZM7.94655 1.52607C8.30578 1.5241 8.52658 1.53926 8.52658 1.53926C11.519 1.54585 12.95 2.44885 13.2861 2.75205C14.3869 3.69394 14.9524 5.95276 14.5385 9.27212C14.143 12.4887 11.7899 12.693 11.3549 12.8314C11.1703 12.8907 9.45661 13.3126 7.29995 13.1741C7.29995 13.1741 5.69234 15.1126 5.19141 15.6136C5.11231 15.6993 5.02003 15.7256 4.96071 15.7124C4.87503 15.6927 4.84866 15.5872 4.85525 15.4422L4.86844 12.7932C1.72375 11.9231 1.9083 8.63936 1.94126 6.92563C1.98081 5.21191 2.30378 3.80665 3.25951 2.85751C4.54942 1.69086 6.86822 1.53267 7.94589 1.52607H7.94655ZM8.18384 3.2398C8.1579 3.23972 8.1322 3.24475 8.10822 3.25461C8.08423 3.26448 8.06243 3.27898 8.04406 3.29729C8.02569 3.3156 8.01111 3.33736 8.00117 3.36131C7.99122 3.38526 7.9861 3.41094 7.9861 3.43688C7.9861 3.48932 8.00693 3.53962 8.04402 3.5767C8.0811 3.61379 8.1314 3.63462 8.18384 3.63462C8.67386 3.62527 9.16089 3.71307 9.6168 3.89294C10.0727 4.07282 10.4885 4.34121 10.8401 4.68263C11.5586 5.3813 11.9086 6.31726 11.9217 7.54323C11.9217 7.5692 11.9269 7.59491 11.9368 7.61891C11.9467 7.6429 11.9613 7.66469 11.9797 7.68306C11.998 7.70142 12.0198 7.71598 12.0438 7.72592C12.0678 7.73586 12.0935 7.74097 12.1195 7.74097V7.73504C12.1719 7.73504 12.2222 7.71421 12.2593 7.67712C12.2964 7.64004 12.3172 7.58975 12.3172 7.5373C12.3417 6.96075 12.2485 6.38526 12.0434 5.84588C11.8383 5.30649 11.5255 4.8145 11.1242 4.39986C10.3398 3.63528 9.34983 3.2398 8.18318 3.2398H8.18384ZM5.57766 3.6946C5.43748 3.67462 5.29467 3.70249 5.17229 3.77369H5.16438C4.89414 3.93188 4.64499 4.12962 4.40771 4.39327C4.22974 4.60419 4.13022 4.81445 4.10385 5.01878C4.08834 5.13862 4.0996 5.26041 4.13681 5.37537L4.14999 5.38196C4.35315 5.97922 4.61824 6.55359 4.94094 7.09569C5.35923 7.85488 5.87314 8.55731 6.47011 9.18578L6.48989 9.21214L6.51625 9.23191L6.53602 9.25169L6.5558 9.27146C7.18673 9.86994 7.89102 10.386 8.65182 10.8072C9.52186 11.2818 10.0505 11.5059 10.3669 11.5982V11.6048C10.4591 11.6311 10.5435 11.6443 10.6292 11.6443C10.8993 11.6246 11.155 11.5151 11.3556 11.3332C11.6126 11.1025 11.8169 10.8468 11.9685 10.5765V10.5699C12.1201 10.2865 12.0674 10.0156 11.8499 9.83106C11.4115 9.44758 10.9369 9.10763 10.4328 8.81601C10.0966 8.63145 9.75388 8.7435 9.61546 8.92806L9.31885 9.3031C9.16725 9.48766 8.89042 9.46129 8.89042 9.46129L8.88251 9.46788C6.82604 8.94058 6.27897 6.8584 6.27897 6.8584C6.27897 6.8584 6.2526 6.57498 6.44375 6.42997L6.81286 6.13336C6.99082 5.98836 7.11606 5.64561 6.92491 5.30946C6.63367 4.80505 6.2937 4.33041 5.90985 3.89234C5.82636 3.78878 5.70849 3.71862 5.57766 3.6946ZM8.52593 4.28122C8.47348 4.2814 8.42326 4.3024 8.3863 4.3396C8.34934 4.37681 8.32867 4.42717 8.32885 4.47962C8.32902 4.53206 8.35002 4.58229 8.38723 4.61925C8.42444 4.65621 8.4748 4.67687 8.52724 4.6767C9.18686 4.68815 9.81502 4.96074 10.2739 5.43469C10.481 5.66309 10.6401 5.93066 10.742 6.22161C10.8439 6.51256 10.8865 6.82098 10.8671 7.12864C10.8673 7.18097 10.8882 7.2311 10.9253 7.26804C10.9624 7.30498 11.0125 7.32572 11.0649 7.32572L11.0715 7.33363C11.0975 7.33363 11.1233 7.3285 11.1473 7.31852C11.1713 7.30854 11.1932 7.29391 11.2115 7.27548C11.2299 7.25705 11.2444 7.23518 11.2543 7.21111C11.2642 7.18704 11.2693 7.16126 11.2692 7.13523C11.289 6.35088 11.0451 5.69175 10.5639 5.16445C10.0828 4.63715 9.41047 4.34054 8.55361 4.28122C8.54439 4.28057 8.53514 4.28057 8.52593 4.28122ZM8.8489 5.34835C8.82245 5.34757 8.79611 5.352 8.77139 5.3614C8.74666 5.3708 8.72402 5.38498 8.70477 5.40313C8.68552 5.42128 8.67004 5.44304 8.6592 5.46717C8.64836 5.4913 8.64238 5.51733 8.6416 5.54378C8.64082 5.57022 8.64526 5.59656 8.65466 5.62129C8.66406 5.64601 8.67824 5.66865 8.69638 5.6879C8.71453 5.70715 8.73629 5.72263 8.76043 5.73347C8.78456 5.74431 8.81059 5.75029 8.83703 5.75107C9.48957 5.78403 9.80595 6.11359 9.84549 6.79249C9.84721 6.84378 9.86879 6.8924 9.90569 6.92807C9.94259 6.96374 9.99191 6.98366 10.0432 6.98364H10.0498C10.0764 6.98281 10.1025 6.97664 10.1266 6.9655C10.1507 6.95435 10.1724 6.93847 10.1902 6.91878C10.208 6.89909 10.2217 6.87601 10.2305 6.85092C10.2392 6.82582 10.2428 6.79922 10.241 6.77272C10.1948 5.88949 9.71367 5.39448 8.85681 5.34835C8.85417 5.34829 8.85153 5.34829 8.8489 5.34835Z" fill="white" />
		</svg>
	)
}

export const WhatsappIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13.3797 2.58852C12.6794 1.88305 11.8458 1.32375 10.9275 0.943094C10.0092 0.562442 9.0244 0.368024 8.03032 0.37113C3.86354 0.37113 0.472125 3.76254 0.472125 7.93219C0.472125 9.26453 0.821185 10.5673 1.48211 11.7118L0.40918 15.6306L4.41765 14.5786C5.52583 15.1823 6.76745 15.499 8.02937 15.4999H8.03223C12.199 15.4999 15.5933 12.1085 15.5933 7.93886C15.5958 6.94513 15.4014 5.96074 15.0213 5.04257C14.6412 4.1244 14.0829 3.29064 13.3788 2.58947L13.3797 2.58852ZM8.03223 14.2239C6.90604 14.224 5.80053 13.9213 4.83156 13.3474L4.60171 13.2101L2.22315 13.8328L2.85832 11.5143L2.70954 11.2759C2.07795 10.2752 1.74418 9.1155 1.74724 7.93219C1.74926 6.26518 2.41257 4.66707 3.59159 3.48858C4.77062 2.31009 6.36903 1.64751 8.03604 1.64625C9.71363 1.64625 11.2939 2.3024 12.4794 3.48787C13.0644 4.07077 13.5281 4.76382 13.8437 5.52697C14.1593 6.29013 14.3206 7.10826 14.3182 7.9341C14.3153 11.4028 11.4961 14.2229 8.03223 14.2229V14.2239ZM11.478 9.51536C11.2901 9.41998 10.3602 8.96411 10.1876 8.90116C10.015 8.83822 9.88911 8.80579 9.76132 8.99653C9.63638 9.18442 9.27301 9.61073 9.16238 9.73853C9.05175 9.86346 8.94207 9.88158 8.75419 9.78621C8.56631 9.69084 7.95498 9.49151 7.23397 8.84775C6.67318 8.34705 6.29265 7.72714 6.18202 7.53926C6.07139 7.35138 6.16962 7.24742 6.26595 7.15491C6.35274 7.07098 6.45383 6.9346 6.5492 6.82397C6.64457 6.71334 6.67414 6.63609 6.73708 6.50829C6.80003 6.38335 6.76951 6.27272 6.72182 6.17735C6.67414 6.08198 6.29551 5.15211 6.14101 4.77348C5.98937 4.40344 5.83105 4.45494 5.7147 4.44827C5.60407 4.44254 5.47913 4.44254 5.3542 4.44254C5.22926 4.44254 5.02326 4.49023 4.85063 4.67811C4.67801 4.86599 4.18876 5.32473 4.18876 6.2546C4.18876 7.18448 4.86494 8.08192 4.96031 8.20972C5.05568 8.33466 6.29265 10.2449 8.18768 11.0623C8.63784 11.2559 8.98976 11.3722 9.26348 11.4619C9.71649 11.6049 10.1275 11.584 10.4528 11.5363C10.8161 11.4829 11.5705 11.0804 11.7288 10.6388C11.8871 10.1973 11.8871 9.81959 11.8395 9.74139C11.7946 9.65746 11.6697 9.61073 11.479 9.5144L11.478 9.51536Z" fill="white" />
		</svg>

	)
}

export const FacebookIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.04965 3.02509H9.68281V0.18066C9.40105 0.141899 8.43204 0.0546875 7.30351 0.0546875C4.9488 0.0546875 3.33576 1.53579 3.33576 4.25798V6.76326H0.737305V9.94312H3.33576V17.9442H6.52158V9.94387H9.01494L9.41074 6.76401H6.52084V4.57328C6.52158 3.65421 6.76906 3.02509 8.04965 3.02509Z" fill="#1E2123" />
		</svg>
	)
}

export const VkIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.8583 6.7653C14.569 6.40005 14.6518 6.23756 14.8583 5.91107C14.862 5.90734 17.2495 2.60822 17.4955 1.48938L17.497 1.48863C17.6192 1.0809 17.497 0.78125 16.9059 0.78125H14.9499C14.452 0.78125 14.2224 1.03841 14.0994 1.32614C14.0994 1.32614 13.1036 3.70991 11.6948 5.25512C11.2401 5.70161 11.0299 5.84473 10.7817 5.84473C10.6594 5.84473 10.4694 5.70161 10.4694 5.29388V1.48863C10.4694 0.999651 10.33 0.78125 9.91776 0.78125H6.84225C6.52993 0.78125 6.34433 1.00934 6.34433 1.22178C6.34433 1.68542 7.04873 1.79201 7.12178 3.09645V5.92672C7.12178 6.5469 7.00922 6.66094 6.75951 6.66094C6.09462 6.66094 4.48084 4.26747 3.52449 1.52814C3.33143 0.99667 3.14285 0.781995 2.6412 0.781995H0.684529C0.126227 0.781995 0.0136719 1.03916 0.0136719 1.32688C0.0136719 1.83524 0.678566 4.36288 3.10558 7.70226C4.72309 9.98168 7.00102 11.2168 9.07323 11.2168C10.3188 11.2168 10.4708 10.9425 10.4708 10.4707C10.4708 8.29261 10.3583 8.08688 10.9822 8.08688C11.2714 8.08688 11.7693 8.23 12.9321 9.32946C14.2612 10.6332 14.4796 11.2168 15.2235 11.2168H17.1794C17.737 11.2168 18.0195 10.9425 17.857 10.4013C17.485 9.26312 14.9716 6.92183 14.8583 6.7653Z" fill="#1E2123" />
		</svg>
	)

}

export const LinesIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect y="0.5" width="14.5036" height="3.22302" rx="1" fill="#664EF9" />
			<rect y="11.2773" width="14.5036" height="3.22302" rx="1" fill="#664EF9" />
			<rect y="5.88867" width="14.5036" height="3.22302" rx="1" fill="#664EF9" />
		</svg>

	)
}

export const PlatesIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.00390625" width="5.44444" height="5.44444" rx="1" fill="#BDBDBD" />
			<rect x="0.00390625" y="8.55469" width="5.44444" height="5.44444" rx="1" fill="#BDBDBD" />
			<rect x="8.55957" width="5.44444" height="5.44444" rx="1" fill="#BDBDBD" />
			<rect x="8.55957" y="8.55469" width="5.44444" height="5.44444" rx="1" fill="#BDBDBD" />
		</svg>

	)
}

export const XexexeIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7.32328 6.74139H11.4807C11.5823 6.74139 11.6647 6.65952 11.6647 6.55807V4.37278C11.6647 4.27148 11.5826 4.18945 11.4807 4.18945H7.32328C7.22199 4.18945 7.13965 4.27133 7.13965 4.37278V6.55822C7.13965 6.65952 7.22183 6.74139 7.32328 6.74139Z" fill="#7A7F86" />
			<path d="M7.32328 3.07178H9.67264C9.77393 3.07178 9.85627 2.9896 9.85627 2.88815V0.703167C9.85627 0.601561 9.77424 0.519531 9.67264 0.519531H7.32328C7.22199 0.519531 7.13965 0.601406 7.13965 0.703167V2.88815C7.13965 2.9896 7.22183 3.07178 7.32328 3.07178Z" fill="#7A7F86" />
			<path d="M7.32328 11.1105H13.0685C13.1696 11.1105 13.252 11.0287 13.252 10.9272V8.74223C13.252 8.64093 13.1699 8.55859 13.0685 8.55859H7.32328C7.22199 8.55859 7.13965 8.64078 7.13965 8.74223V10.9272C7.13965 11.0285 7.22183 11.1105 7.32328 11.1105Z" fill="#7A7F86" />
			<path d="M14.6558 12.9297H7.32328C7.22199 12.9297 7.13965 13.0114 7.13965 13.1135V15.2981C7.13965 15.3994 7.22183 15.4818 7.32328 15.4818H14.656C14.7573 15.4818 14.8394 15.3996 14.8394 15.2981V13.1132C14.8393 13.0114 14.7574 12.9297 14.6558 12.9297Z" fill="#7A7F86" />
			<path d="M6.08742 10.6908H4.84283V0.81072C4.84283 0.639047 4.70363 0.5 4.53211 0.5H2.02615C1.85464 0.5 1.71543 0.639047 1.71543 0.81072V10.6908H0.471C0.351218 10.6908 0.24231 10.7597 0.190731 10.8676C0.138996 10.9755 0.153755 11.1033 0.228639 11.1965L3.03692 15.3841C3.09596 15.4577 3.18498 15.5 3.27913 15.5C3.37328 15.5 3.46215 15.4577 3.52118 15.3841L6.32947 11.1965C6.40435 11.1032 6.41927 10.9755 6.36753 10.8676C6.31595 10.7598 6.2072 10.6908 6.08742 10.6908Z" fill="#7A7F86" />
		</svg>

	)
}

export const OptionsIcon = ({ className }: TIcon) => {
	return (
		<svg className={className} width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M5.91109 4.29814C5.91109 2.90551 4.937 1.73697 3.63453 1.4358V0.661897C3.63453 0.296309 3.33822 0 2.97264 0C2.60705 0 2.31074 0.296309 2.31074 0.661897V1.4358C1.00835 1.73689 0.0341797 2.90551 0.0341797 4.29814C0.0341797 5.69077 1.00827 6.85931 2.31074 7.16048V17.3381C2.31074 17.7037 2.60705 18 2.97264 18C3.33822 18 3.63453 17.7037 3.63453 17.3381V7.16048C4.937 6.85931 5.91109 5.69077 5.91109 4.29814ZM1.35805 4.29814C1.35805 3.40781 2.08238 2.68348 2.97271 2.68348C3.86303 2.68348 4.58737 3.40781 4.58737 4.29814C4.58737 5.18846 3.86303 5.9128 2.97271 5.9128C2.08238 5.9128 1.35805 5.18846 1.35805 4.29814Z" fill="#664EF9" />
			<path d="M8.66188 8.89222V0.661897C8.66188 0.296309 8.36557 0 7.99998 0C7.63439 0 7.33808 0.296309 7.33808 0.661897V8.89222C6.03569 9.19331 5.06152 10.3619 5.06152 11.7546C5.06152 13.1472 6.03562 14.3157 7.33808 14.6169V17.3381C7.33808 17.7037 7.63439 18 7.99998 18C8.36557 18 8.66188 17.7037 8.66188 17.3381V14.6169C9.96427 14.3158 10.9384 13.1472 10.9384 11.7546C10.9384 10.3619 9.96434 9.19338 8.66188 8.89222ZM6.38539 11.7546C6.38539 10.8642 7.10973 10.1399 8.00005 10.1399C8.89038 10.1399 9.61471 10.8642 9.61471 11.7546C9.61471 12.6449 8.89038 13.3692 8.00005 13.3692C7.10973 13.3692 6.38539 12.6449 6.38539 11.7546Z" fill="#664EF9" />
			<path d="M15.9658 7.20151C15.9658 5.80888 14.9917 4.64034 13.6892 4.33918V0.661897C13.6892 0.296309 13.3929 0 13.0273 0C12.6617 0 12.3654 0.296309 12.3654 0.661897V4.33918C11.063 4.64027 10.0889 5.80888 10.0889 7.20151C10.0889 8.59415 11.063 9.76269 12.3654 10.0639V17.3381C12.3654 17.7037 12.6617 18 13.0273 18C13.3929 18 13.6892 17.7037 13.6892 17.3381V10.0639C14.9917 9.76269 15.9658 8.59415 15.9658 7.20151ZM11.4127 7.20151C11.4127 6.31119 12.1371 5.58685 13.0274 5.58685C13.9177 5.58685 14.6421 6.31119 14.6421 7.20151C14.6421 8.09184 13.9177 8.81618 13.0274 8.81618C12.1371 8.81618 11.4127 8.09184 11.4127 7.20151Z" fill="#664EF9" />
		</svg>

	)
}

export const ArrowRightIcon = ({ className }) => {
	return (
		<svg className={className} width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.125 11.25L5.875 6.5L1.125 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>

	)
}