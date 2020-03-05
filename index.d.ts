
export type BrowserVersion = {
    name: String;
    version: String;
};

export type BrowserInfos = {
    browserVersion: BrowserVersion;

    isOsx: Boolean;
    isIos: Boolean;
    isIpad: Boolean;
    isIphone: Boolean;
    iosVersion?: Number;

    isWindows: Boolean;
    isWindowsPhone: Boolean;
    isWindowsTablet: Boolean;

    isAndroid: Boolean;
    isAndroidPhone: Boolean;
    isAndroidTablet: Boolean;

    isTablet: Boolean;
    isPhone: Boolean;
    isDesktop: Boolean;
    isDevice: Boolean;
    isTouch: Boolean;

    isFirefox: Boolean;
    isSafari: Boolean;
    isOpera: Boolean;
    isIE: Boolean;
    isIE9: Boolean;
    isIE10: Boolean;
    isIE11: Boolean;
    isIE12: Boolean;
    isEdge: Boolean;
};

export type VacuumBrowser = BrowserInfos & {
    addClasses(el: HTMLElement): void;
    getInfos(): BrowserInfos;
};

declare const Vacuum: VacuumBrowser;

export default Vacuum;
