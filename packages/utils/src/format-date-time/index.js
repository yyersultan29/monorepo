"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateTime = formatDateTime;
function formatDateTime(date) {
    return new Date(date).toLocaleString('ru-RU', { hour12: false });
}
