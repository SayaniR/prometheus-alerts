import yaml from "js-yaml";

export const fetchAlertRules = async () => {
    const url = "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/refs/heads/master/_data/rules.yml";
    const response = await fetch(url);
    const yamlText = await response.text();
    return yaml.load(yamlText);
};

