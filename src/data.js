// All content lives here. Facts come from the resume and the repo READMEs only.

export const me = {
  name: 'Triambakk R B',
  location: 'Chennai, India',
  email: 'rb.triambakk@gmail.com',
  github: 'https://github.com/Triambakk',
  linkedin: 'https://linkedin.com/in/triambakk-rb',
  resume: '/resume.pdf',
}

export const spec = [
  ['Studying', 'B.Tech CSE, SRM IST'],
  ['Class of', '2027 · CGPA 8.98'],
  ['Based in', 'Chennai'],
  ['Now', 'AI Data Analyst Intern, InAmigos Foundation'],
]

export const focus = [
  ['Retrieval and LLM apps', 'A RAG question-answering app built on embeddings, FAISS and the Gemini API.'],
  ['Data cleaning and analysis', 'An ETL pipeline for messy CRM data, and day-to-day analysis with Pandas, SQL and spreadsheets.'],
  ['Backend and APIs', 'FastAPI and Django REST services with validation, authentication, tests and API docs.'],
  ['Clear write-ups', 'Step-by-step READMEs, Swagger documentation and Postman collections.'],
]

export const experience = [
  {
    role: 'AI Data Analyst Intern',
    org: 'InAmigos Foundation (IAF)',
    where: 'Remote · Bilaspur, Chhattisgarh',
    when: 'Oct 2026 – Present',
    points: [
      'Clean, structure and explore non-profit program datasets using Excel, Google Sheets and Pandas to support decision-making.',
      'Write SQL queries to extract and aggregate data, and resolve inconsistencies and quality issues in raw datasets.',
      'Share findings through short summaries and charts within AI and data analytics workflows.',
    ],
  },
]

export const education = [
  { name: 'SRM Institute of Science and Technology, Kattankulathur', what: 'B.Tech, Computer Science and Engineering · CGPA 8.98 / 10', when: '2023 – 2027' },
  { name: 'Hindustan International School, Padur', what: 'Class XII, CBSE · 82.4%', when: '2021 – 2023' },
]

export const achievements = [
  'Amazon ML Challenge 2025: ranked 131st among 23,000+ teams (SMAPE 44.3), training models on large-scale data using an NVIDIA H200 GPU.',
  'AWS Certified Developer – Associate (2026)',
  'SAP Certified – Backend Developer, ABAP Cloud (2026)',
  'NPTEL: Machine Learning (2025) and Database Management Systems (2025)',
]

export const projects = [
  {
    id: 'rag',
    when: 'Oct 2026',
    flag: 'RAG · Python',
    title: 'AI Research & Documentation Assistant',
    line: 'Ask a long PDF a question in plain language and get an answer that points back to the pages it came from.',
    problem:
      'Finding one specific answer inside a long technical document usually means scrolling and keyword-searching, and keyword search misses passages that use different wording.',
    solution:
      'Upload a PDF, ask a question, and read a short answer grounded only in the retrieved excerpts. The app shows the exact passages, page numbers and similarity scores, so the answer can be checked instead of trusted. Meant for anyone reading dense documents.',
    steps: [
      ['Extract', 'PyMuPDF reads the PDF page by page, keeping page numbers.'],
      ['Chunk & embed', 'Text is split into 1,000-character chunks with 150 characters of overlap, then embedded with Sentence Transformers.'],
      ['Index', 'Vectors go into an in-memory FAISS index.'],
      ['Retrieve', 'The top 3 closest chunks are pulled for each question.'],
      ['Answer', 'Gemini answers from those excerpts only; the sources are shown alongside.'],
    ],
    stack: ['Python', 'Streamlit', 'PyMuPDF', 'Sentence Transformers', 'FAISS', 'Gemini API', 'pytest'],
    done: [
      'PDF upload with page-aware text extraction',
      'Overlapping chunking and semantic search',
      'Answers with source passages, page numbers and similarity scores',
      'Document overview: page count, chunk count, file size',
      'A pytest test suite in the repo',
    ],
    notYet: [
      'OCR, so scanned image-only PDFs are not supported',
      'A persistent index; it is rebuilt each session',
      'Multi-document search and a formal evaluation of answer quality',
    ],
    role: 'Personal project. I designed and built it end to end.',
    links: [['Repository', 'https://github.com/Triambakk/AI-Research-Documentation-Assistant']],
    note: 'Runs locally with a Gemini API key; setup steps are in the README.',
  },
  {
    id: 'etl',
    when: 'Apr – Jun 2026',
    flag: 'Data pipeline · FastAPI',
    title: 'B2B SaaS Integration Engine',
    line: 'One API endpoint that takes customer records in whatever shape a vendor sends them and stores them in a single clean schema.',
    problem:
      'Every SaaS tool exports customer data differently: odd column names, mixed date formats, "N/A" and "-" for blanks, currency symbols inside numbers. Merging them by hand is slow and error-prone.',
    solution:
      'Send a raw JSON record to /api/v1/sync. The service cleans it, maps its columns onto a fixed 10-field customer schema, validates it and saves it, then returns a receipt with a trace ID. Intended for a team onboarding customers from several source systems, such as HubSpot or Salesforce exports.',
    steps: [
      ['Clean', 'Normalise keys, trim whitespace, parse dates to ISO format, turn blank markers into nulls, coerce booleans and numbers.'],
      ['Map columns', 'Exact match, then a 40+ entry alias table, then optional LLM mapping, then fuzzy token matching as a fallback.'],
      ['Validate', 'A Pydantic schema checks types, email format and value ranges before anything is written.'],
      ['Persist', 'SQLAlchemy writes to SQLite locally or PostgreSQL in production.'],
    ],
    stack: ['Python', 'FastAPI', 'Pydantic', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'OpenAPI / Swagger', 'Postman'],
    done: [
      'Cleaning rules, alias mapping and a fuzzy fallback',
      'Pydantic validation, with 422 errors on bad input',
      'SQLite and PostgreSQL support and a Docker Compose stack',
      'Swagger and ReDoc docs, plus a Postman collection of sample payloads',
      'Deployed on Render, with the API docs public',
    ],
    notYet: [
      'Batch sync and async database writes',
      'JWT authentication and rate limiting',
      'Webhooks, metrics and schema migrations',
    ],
    role: 'Team project. I worked on the data-cleaning and column-mapping pipeline, the validation layer, and the Docker and Render deployment.',
    links: [
      ['Repository', 'https://github.com/VarunKarthikB-18/Automated-SaaS-B2B-Integration-Engine'],
      ['Live API docs', 'https://b2b-saas-integration-engine.onrender.com/docs'],
    ],
    note: 'The live link opens the Swagger UI, where the endpoint can be tried directly.',
  },
  {
    id: 'diagno',
    when: 'Sep – Oct 2026',
    flag: 'Full-stack · Django · React',
    title: 'DIAGNO, a diagnostic booking platform',
    line: 'A full-stack appointment booking app where patients book tests and staff manage them, without two people landing on the same slot.',
    problem:
      'Booking systems fail in two quiet ways: two people grab the same slot at the same moment, and everyone sees the same screens regardless of who they are.',
    solution:
      'A web app with a multi-step booking flow, token-based login, and separate permissions for patients and staff. Bookings are written inside database transactions with constraints, so a slot cannot be taken twice.',
    steps: [
      ['Sign in', 'JWT authentication identifies the user.'],
      ['Book', 'A multi-step flow in the React front end collects the booking.'],
      ['Protect', 'The Django REST API saves the booking inside a transaction, backed by database constraints against double-booking.'],
      ['Separate roles', 'Role-based permissions give patients and staff different access.'],
    ],
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'React', 'JWT', 'pytest'],
    done: [
      'Multi-step booking flow',
      'JWT authentication',
      'Double-booking prevention using transactions and database constraints',
      'Role-based permissions for patients and staff',
      'pytest tests covering authentication, validation and booking flows',
    ],
    notYet: [
      'No live deployment or usage figures are claimed here',
      'Payments, notifications and reporting are not part of this write-up',
    ],
    role: 'I built it full-stack, from the Django REST API to the React booking flow.',
    links: [['Repository', 'https://github.com/Triambakk/Diagno-healthcare-booking-platform']],
    note: 'Source code is on GitHub.',
  },
  {
    id: 'vote',
    when: 'Sep – Nov 2025',
    flag: 'Computer vision · Python',
    title: 'Smart Voting System',
    line: 'A voting prototype that checks the voter by face, resists photo spoofing, and allows one vote per person.',
    problem:
      'A shared-device voting setup needs to confirm that the person in front of it is who they say they are, and that a printed photo or a screen cannot stand in for them.',
    solution:
      'The app verifies each voter with real-time face recognition. Blink detection checks that a live person is present, and the backend records who has voted so each voter can vote only once.',
    steps: [
      ['Recognise', 'OpenCV and face recognition match the face on camera to a registered voter.'],
      ['Check liveness', 'Blink detection blocks attempts that use a photograph.'],
      ['Record', 'Backend tracking enforces one vote per voter.'],
    ],
    stack: ['Python', 'OpenCV', 'Face recognition'],
    done: [
      'Real-time face-based voter verification',
      'Blink detection against photo spoofing',
      'Backend tracking that enforces one vote per voter',
    ],
    notYet: [
      'No accuracy figures are claimed here',
      'A learning prototype, not a system for real elections',
    ],
    role: 'I built the voting app in Python with OpenCV.',
    links: [],
    note: '',
  },
]

export const concept = {
  title: 'Reducing Friction in Design Research',
  problem:
    'Imagine a designer who needs the approved finish for a plastic part, or a clearance rule from a design guideline. The answer exists, but it sits in a long PDF in a shared folder, found by guessing file names and skimming pages. The time goes on searching, not designing.',
  journey: [
    ['Ask', 'The designer types a question in plain words: "What surface finish is approved for this trim piece?"'],
    ['Retrieve', 'The tool searches only the approved documents and surfaces the most relevant passages.'],
    ['Read', 'A short answer appears with the source file and page next to it.'],
    ['Verify', 'One click opens the original passage. If the answer looks wrong, the designer flags it.'],
  ],
  architecture: [
    ['Approved documents', 'Specs, guidelines, material sheets'],
    ['Ingest', 'Extract text, chunk, keep file name and page'],
    ['Embed + index', 'Sentence embeddings in a vector index'],
    ['Retrieve', 'Top matching passages per question'],
    ['Answer', 'An LLM writes a short reply from those passages only, with citations'],
  ],
  prototype: [
    'Start from the RAG pattern already working in my PDF assistant: PyMuPDF, Sentence Transformers, FAISS and a Streamlit front end.',
    'Extend it from one uploaded PDF to a folder of approved documents, storing source file and page with every chunk.',
    'Add a feedback button on each answer so wrong or unhelpful results are captured.',
    'Keep a simple log of questions and retrieved passages for evaluation. No new infrastructure is needed to test the idea.',
  ],
  evaluation: [
    ['Retrieval relevance', 'Write 30 to 50 realistic questions with the correct source page marked, then check how often it appears in the top 3 results.'],
    ['Task completion time', 'Time a few people finding the same answers by hand and with the tool.'],
    ['Answer trust', 'Check that each cited passage supports the answer, and count answers that should have said "not found".'],
    ['User feedback', 'A short rating plus a free-text note after each answer; review the misses.'],
  ],
  disclaimer:
    'A proposed concept, not a completed project. It is an illustrative scenario: I have not worked with designers or with any company documents.',
}

export const skills = [
  ['AI & retrieval', ['LLMs', 'RAG', 'Embeddings', 'FAISS', 'Sentence Transformers', 'Gemini API', 'Machine Learning', 'OpenCV']],
  ['Data', ['Pandas', 'SQL', 'PostgreSQL', 'SQLAlchemy', 'ETL pipelines', 'EDA & cleaning', 'Excel', 'Google Sheets']],
  ['Building', ['Python', 'C', 'C++', 'FastAPI', 'Django REST', 'React', 'Pydantic', 'Streamlit', 'Docker', 'Git', 'Postman', 'AWS']],
  ['Fundamentals', ['Data structures & algorithms', 'OOP', 'DBMS', 'Operating systems']],
]
