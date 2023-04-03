const domain = "https://golden-spike-api.fly.dev";

export const getSchedule = async () => {
    const res = await fetch(`${domain}/schedule`);
    return res.json();
};

export const getStandings = async () => {
    const res = await fetch(`${domain}/standings`);
    return res.json();
}

