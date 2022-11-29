const filterLebels = (platform) => {
    let _name = "";
    let _handle = "";
    let _link = "";
    platform = platform.toLowerCase();

    switch (platform) {
        case "facebook":
            _name = "Page Name";
            _handle = "Page Handle";
            _link = "Page Link";
            break;
        case "instagram":
            _name = "Page Name";
            _handle = "Page Handle";
            _link = "Page Link";
            break;
        case "twitter":
        case "linkedin":
            _name = "Profile Name";
            _handle = "Profile Handle";
            _link = "Profile Link";
            break;
        case "youtube":
            _name = "Channel Name";
            _handle = "Channel Handle";
            _link = "Channel Link";
            break;
        default:
            _name = "Page Name";
            _handle = "Page Handle";
            _link = "Page Link";
            break;
    }

    return { _name, _handle, _link };
};
