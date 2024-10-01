// queries/fetchForm.ts
export const fetchFormQuery = `
  *[_type == "selfCheckForm"] {
    title,
    sections[] {
      title,
      rows[] {
        "rowId": _key,
        label,
        type,
        options,
        note
      }
    }
  }
`;
