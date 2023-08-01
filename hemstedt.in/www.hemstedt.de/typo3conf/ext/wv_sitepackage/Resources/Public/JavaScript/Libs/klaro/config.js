// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
var klaroConfig = {
	// With the 0.7.0 release we introduce a 'version' paramter that will make
	// if easier for us to keep configuration files backwards-compatible in the future.
	version: 1,

	// You can customize the ID of the DIV element that Klaro will create
	// when starting up. If undefined, Klaro will use 'klaro'.
	elementID: 'klaro',

	// You can override CSS style variables here. For IE11, Klaro will
	// dynamically inject the variables into the CSS. If you still consider
	// supporting IE9-10 (which you probably shouldn't) you need to use Klaro
	// with an external stylesheet as the dynamic replacement won't work there.
	styling: {
		//theme: ['light', 'top', 'wide'],
		theme: ['light'],
	},

	// Setting this to true will keep Klaro from automatically loading itself
	// when the page is being loaded.
	noAutoLoad: false,

	// Setting this to true will render the descriptions of the consent
	// modal and consent notice are HTML. Use with care.
	htmlTexts: true,

	// Setting 'embedded' to true will render the Klaro modal and notice without
	// the modal background, allowing you to e.g. embed them into a specific element
	// of your website, such as your privacy notice.
	embedded: false,

	// You can group services by their purpose in the modal. This is advisable
	// if you have a large number of services. Users can then enable or disable
	// entire groups of services instead of having to enable or disable every service.
	//groupByPurpose: true,
	groupByPurpose: false,

	// How Klaro should store the user's preferences. It can be either 'cookie'
	// (the default) or 'localStorage'.
	storageMethod: 'cookie',

	// You can customize the name of the cookie that Klaro uses for storing
	// user consent decisions. If undefined, Klaro will use 'klaro'.
	cookieName: 'klaro',

	// You can also set a custom expiration time for the Klaro cookie.
	// By default, it will expire after 120 days.
	cookieExpiresAfterDays: 365,

	// You can change to cookie domain for the consent manager itself.
	// Use this if you want to get consent once for multiple matching domains.
	// If undefined, Klaro will use the current domain.
	//cookieDomain: '.github.com',

	// You can change to cookie path for the consent manager itself.
	// Use this to restrict the cookie visibility to a specific path.
	// If undefined, Klaro will use '/' as cookie path.
	//cookiePath: '/',

	// Defines the default state for services (true=enabled by default).
	default: false,

	// If "mustConsent" is set to true, Klaro will directly display the consent
	// manager modal and not allow the user to close it before having actively
	// consented or declines the use of third-party services.
	//mustConsent: false,
	mustConsent: false,

	// Show "accept all" to accept all services instead of "ok" that only accepts
	// required and "default: true" services
	//acceptAll: true,
	acceptAll: false,

	// replace "decline" with cookie manager modal
	//hideDeclineAll: false,
	hideDeclineAll: true,

	// hide "learnMore" link
	//hideLearnMore: false,
	hideLearnMore: false,

	// show cookie notice as modal
	//noticeAsModal: false,
	noticeAsModal: false,

	// You can also remove the 'Realized with Klaro!' text in the consent modal.
	// Please don't do this! We provide Klaro as a free open source tool.
	// Placing a link to our website helps us spread the word about it,
	// which ultimately enables us to make Klaro! better for everyone.
	// So please be fair and keep the link enabled. Thanks :)
	//disablePoweredBy: true,

	// you can specify an additional class (or classes) that will be added to the Klaro `div`
	//additionalClass: 'my-klaro',

	// You can define the UI language directly here. If undefined, Klaro will
	// use the value given in the global "lang" variable. If that does
	// not exist, it will use the value given in the "lang" attribute of your
	// HTML tag. If that also doesn't exist, it will use 'en'.
	//lang: 'en',

	// You can overwrite existing translations and add translations for your
	// service descriptions and purposes. See `src/translations/` for a full
	// list of translations that can be overwritten:
	// https://github.com/KIProtect/klaro/tree/master/src/translations

	// Example config that shows how to overwrite translations:
	// https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
	translations: {
		// translationsed defined under the 'zz' language code act as default
		// translations.
		zz: {
			privacyPolicyUrl: '/en/datenschutz/',
		},
		// If you erase the "consentModal" translations, Klaro will use the
		// bundled translations.
		de: {
			privacyPolicyUrl: '/datenschutz/',
			consentModal: {
				title: 'Cookie-Hinweis',
				description: 'Hier können Sie einsehen, welche Information beim Aufruf der Website gespeichert wird.',
			},
			acceptSelected: 'Speichern',
			purposes: {
				session: 'Sitzungscookie',
				yt: 'Youtube'
			},
			poweredBy: "Mit Klaro realisiert",
			service: {
				required:{
					title:"Notwendig"
				},
			},
			sessioncookie: {
				title: 'Browsersitzung',
				description: 'Der sog. Session Cookie dient - komplett anonymisiert - zur Identifikation eines Nutzers, damit potenziell  z.B. die Sparachauswahl in einem neuen Tab erhalten bleibt.',
			},
			ytcookie: {
				title: 'Youtube',
				description: 'Genau wie beim Session Cookie wird eine Nummer im Browser abgelegt. Beim Aufruf der Seite werden keine Daten an Youtube übertragen. Beim Klick auf das Video werden allerdings Daten übertragen.',
			},
		},
		en: {
			privacyPolicyUrl: '/en/datenschutz/',
			consentModal: {
				title: 'Cookie notice',
				description: 'Here you can see information that is saved during a page visit.',
			},
			acceptSelected: 'Save settings',
			purposes: {
				session: 'Session cookie',
				yt: 'Youtube'
			},
			sessioncookie: {
				title: 'Browser session',
				description: 'The session cookie saves a number which is connected to your browser´s session. It is completely anonymized and is potentially used to save a choice concerning the preferred language.'
			},
			ytcookie: {
				title: 'Youtube',
				description: 'Also the Youtube cookie saves a number which is connected to your browser´s session. No data is sent to Youtube initially. When a video is clicked and beeing watched, data will be sent to Youtube.',
			},
			poweredBy: "Powered by Klaro",
			service: {
				required:{
					title:"Necessary"
				},
			},
		},
		ru: {
			privacyPolicyUrl: '/ru/datenschutz/',
			acceptSelected: 'сохранить',
			consentModal: {
				title: 'Уведомление о файлах cookie',
				description: 'Здесь вы можете увидеть, какая информация сохраняется при посещении веб-сайта.',
			},
			contextualConsent: {
				acceptAlways:"всегда",
				acceptOnce:"да",
				description:"Хотели бы вы загрузить внешний контент, предоставленный {title}"
			},
			purposes: {
				session: 'Сессионный файл cookie',
				yt: 'Youtube'
			},
			poweredBy: "Реализовано с Кларо\n",
			privacyPolicy: {
				name: "политике конфиденциальност",
				text: "Более подробную информацию можно найти в нашем {privacyPolicy}."
			},
			service: {
				purposes:"Цели",
				purpose:"цель",
				required:{
					title:"Нужно"
				},
			},
			sessioncookie: {
				title: 'Сеанс браузера',
				description: 'Так называемый файл cookie сеанса используется - полностью анонимно - для идентификации пользователя, так что, например, возможность сохранения потенциально может быть сохранена на новой вкладке.'
			},
			ytcookie: {
				title: 'Youtube',
				description: 'Как и в случае с файлом cookie сеанса, номер хранится в браузере. Когда страница вызывается, данные на YouTube не передаются. Однако, когда вы нажимаете на видео, данные передаются.',
			},
		},
	},

	// This is a list of third-party services that Klaro will manage for you.
	services: [
		{
			name: 'sessioncookie',
			purposes: ['session'],
			required: true,
			default: true
		},
		{
			name: 'ytcookie',
			purposes: ['yt'],
			default: true
		},
	],
};
