import { CHANNEL_CONFIG } from "../../assets/icon/configs/channelConfigs"

export const SOURCE_OPTIONS = Object.entries(CHANNEL_CONFIG).map(
    ([value, config]) => ({
            value,
            label: config.label,
            icon:config.icon,
    })
)