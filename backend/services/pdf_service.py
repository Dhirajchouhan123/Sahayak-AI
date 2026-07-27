from pypdf import PdfReader


def extract_text_from_pdf(file):
    """
    Extracts text page-by-page from a PDF.

    Returns:
        list[dict]:
        [
            {
                "page": 1,
                "text": "..."
            },
            ...
        ]
    """

    reader = PdfReader(file)

    pages = []

    for page_number, page in enumerate(reader.pages, start=1):

        text = page.extract_text()

        if text:
            pages.append(
                {
                    "page": page_number,
                    "text": text.strip()
                }
            )

    return pages