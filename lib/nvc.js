function translateToNVC(text) {
    const lower = text.toLowerCase();
    
    let observation = "When I see/hear [specific behavior]...";
    let feeling = "I feel [feeling]...";
    let need = "Because I need [need]...";
    let request = "Would you be willing to [specific action]?";

    // Simple keyword heuristics
    if (lower.includes("hate")) {
        feeling = "I feel hurt and angry...";
        need = "Because I need connection and safety...";
    } else if (lower.includes("stupid") || lower.includes("idiot")) {
        feeling = "I feel frustrated...";
        need = "Because I need competence and clarity...";
    } else if (lower.includes("never")) {
        observation = "When I remember times I didn't see [action]...";
        feeling = "I feel hopeless...";
        need = "Because I need consistency...";
    } else if (lower.includes("lazy")) {
        feeling = "I feel overwhelmed...";
        need = "Because I need support and shared responsibility...";
    }

    return `🛡️ NVC Translation:\n\n${observation}\n${feeling}\n${need}\n${request}`;
}

module.exports = { translateToNVC };
