// /scripts/uiUtilities.ts

export function getHeaderStyle(style: string): { headerStyle: string; headerClasses: string } {
    let headerStyle = '';

    switch (style) {
        case "solid":
            headerStyle = "bg-primary-500";
            break;
        case "gradient":
            headerStyle = "bg-gradient-to-r from-primary-500 to-secondary-600";
            break;
        case "translucent":
            headerStyle = "bg-white bg-opacity-70 backdrop-filter backdrop-blur-md";
            break;
        case "none":
            headerStyle = "";
            break;
        default:
            headerStyle = "bg-primary-500";
    }

    const headerClasses = `${headerStyle} ${style !== "none" ? "shadow-lg" : ""} transition-all duration-300`;

    return { headerStyle, headerClasses };
}

export function getMenuButtonColor(style: string): string {
    return style === "none" || style === "translucent" ? "text-gray-800" : "text-gray-50";
}
