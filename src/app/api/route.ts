type Stat = {
    "pm2.5": number, "pm2.5_10minute": number, "pm2.5_30minute": number, "pm2.5_60minute": number, "pm2.5_6hour": number, "pm2.5_24hour": number, "pm2.5_1week": number, "time_stamp": number
}
type SensorData = {
    "api_version": string,
    "time_stamp": number,
    "data_time_stamp": number,
    "sensor": {
        "sensor_index": number,
        "last_modified": number,
        "date_created": number,
        "last_seen": number,
        "private": number,
        "is_owner": number,
        "name": string,
        "icon": number,
        "location_type": number,
        "model": string,
        "hardware": string,
        "led_brightness": number,
        "firmware_version": string,
        "rssi": number,
        "uptime": number,
        "pa_latency": number,
        "memory": number,
        "position_rating": number,
        "latitude": number,
        "longitude": number,
        "altitude": number,
        "channel_state": number,
        "channel_flags": number,
        "channel_flags_manual": number,
        "channel_flags_auto": number,
        "confidence": number,
        "confidence_auto": number,
        "confidence_manual": number,
        "humidity": number,
        "humidity_a": number,
        "temperature": number,
        "temperature_a": number,
        "pressure": number,
        "pressure_a": number,
        "analog_input": number,
        "pm1.0": number,
        "pm1.0_a": number,
        "pm1.0_b": number,
        "pm2.5": number,
        "pm2.5_a": number,
        "pm2.5_b": number,
        "pm2.5_alt": number,
        "pm2.5_alt_a": number,
        "pm2.5_alt_b": number,
        "pm10.0": number,
        "pm10.0_a": number,
        "pm10.0_b": number,
        "scattering_coefficient": number,
        "scattering_coefficient_a": number,
        "scattering_coefficient_b": number,
        "deciviews": number,
        "deciviews_a": number,
        "deciviews_b": number,
        "visual_range": number,
        "visual_range_a": number,
        "visual_range_b": number,
        "0.3_um_count": number,
        "0.3_um_count_a": number,
        "0.3_um_count_b": number,
        "0.5_um_count": number,
        "0.5_um_count_a": number,
        "0.5_um_count_b": number,
        "1.0_um_count": number,
        "1.0_um_count_a": number,
        "1.0_um_count_b": number,
        "2.5_um_count": number,
        "2.5_um_count_a": number,
        "2.5_um_count_b": number,
        "5.0_um_count": number,
        "5.0_um_count_a": number,
        "5.0_um_count_b": number,
        "10.0_um_count": number,
        "10.0_um_count_a": number,
        "10.0_um_count_b": number,
        "pm1.0_cf_1": number,
        "pm1.0_cf_1_a": number,
        "pm1.0_cf_1_b": number,
        "pm1.0_atm": number,
        "pm1.0_atm_a": number,
        "pm1.0_atm_b": number,
        "pm2.5_atm": number,
        "pm2.5_atm_a": number,
        "pm2.5_atm_b": number,
        "pm2.5_cf_1": number,
        "pm2.5_cf_1_a": number,
        "pm2.5_cf_1_b": number,
        "pm10.0_atm": number,
        "pm10.0_atm_a": number,
        "pm10.0_atm_b": number,
        "pm10.0_cf_1": number,
        "pm10.0_cf_1_a": number,
        "pm10.0_cf_1_b": number,
        "primary_id_a": number,
        "primary_key_a": string,
        "primary_id_b": number,
        "primary_key_b": string,
        "secondary_id_a": number,
        "secondary_key_a": string,
        "secondary_id_b": number,
        "secondary_key_b": string,
        "stats": Stat,
        "stats_a": Stat,
        "stats_b": Stat
    }
}
type LocationData = {
    latitude: number,
    longitude: number,
}
export async function get() {
    try {
        const result: Response = await fetch(`${process.env.BASE_PURPLE_AIR_URL}/sensors/60309`, {
            method: "GET",
            headers: {
                "X-API-Key": `${process.env.PURPLE_AIR_API_KEY}`
            }
        })
        const jsonRes: SensorData = await result.json()
        const avg2_5_over_1_hour = jsonRes["sensor"]["stats"]["pm2.5_60minute"];
        return avg2_5_over_1_hour;
    } catch (err: any) {
        throw new Error(err.message)
    }
}

export async function getLocal(args: LocationData) {
    try {
        const result: Response = await fetch(`${process.env.OPEN_CAGE_DATA_URL}/geocode/v1/json?q=${args.latitude},${args.longitude}&key=${process.env.OPEN_CAGE_DATA_API_KEY}`, {
            method: "GET"
        });
        const jsonResult: any = await result.json();
        return jsonResult["results"][0]["components"]["city"];
    } catch (err: any) {
        throw new Error(err.message)
    }
}