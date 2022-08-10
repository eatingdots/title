// Packages
import { describe, expect, it } from "vitest";

// Source
const title = require(".");

it("converts with accent", () => {
  const from = "Se é texto com acento";
  const to = "Se é Texto com Acento";
  expect(title(from)).toMatch(to);
});

it("converts with lots of connections", () => {
  const from = "Bolo de banana, doce de leite e sorvete da casa";
  const to = "Bolo de Banana, Doce de Leite e Sorvete da Casa";
  expect(title(from)).toMatch(to);
});

it("converts from all uppercase", () => {
  const from = "SUPER FATIA ROMEU E JULIETA";
  const to = "Super fatia Romeu e Julieta";
  expect(title(from)).toMatch(to);
});

it("converts without spaces", () => {
  const from = "Pastel de bacalhau(bolinho) 6 uni. 🇵🇹";
  const to = "Pastel de Bacalhau (bolinho) 6 uni. 🇵🇹";
  expect(title(from)).toMatch(to);
});

it("converts without spaces 2", () => {
  const from = "Calamares(anel de Lula)🇵🇹";
  const to = "Calamares (anel de Lula)🇵🇹";
  expect(title(from)).toMatch(to);
});

it("converts with apostrophe", () => {
  const from = "Cocktail's";
  const to = "Cocktail's";
  expect(title(from)).toMatch(to);
});

it("converts drink measure 1", () => {
  const from = "Pedras Salgadas 250ml 🇵🇹 ";
  const to = "Pedras Salgadas 250ml 🇵🇹";
  expect(title(from)).toMatch(to);
});

it("converts drink measure 2", () => {
  const from = "Água sem gás";
  const to = "Água sem gás";
  expect(title(from)).toMatch(to);
});

it("converts drink measure 3", () => {
  const from = "Água com gás";
  const to = "Água com gás";
  expect(title(from)).toMatch(to);
});

it("converts random sentence", () => {
  const from = "Tem cheiro de pão no ar";
  const to = "Tem Cheiro de Pão no Ar";
  expect(title(from)).toMatch(to);
});
