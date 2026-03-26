const ImageKit = require('imagekit');
const fs = require('fs');
const path = require('path');

const imagekit = new ImageKit({
    publicKey: "public_BIet+RR10Ruy+LKXEYPruL8qZhk=",
    privateKey: "private_1lOFbgn7FKk9aHYTJ2SHX312UFc=",
    urlEndpoint: "https://ik.imagekit.io/akpxh7r76"
});

const inputDir = 'g:/CODING/Client/challenger-classes/src/assets/formulas';
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

console.log(`Found ${files.length} formula images to process.\n`);

// ── Subject detection ───────────────────────────────────────────────
function detectSubject(filename) {
  const f = filename.toLowerCase();
  if (f.includes('maths') || f.includes('differentiation') || f.includes('integration')
      || f.includes('logic') || f.includes('plane') || f.includes('vector')
      || f.includes('matrices') || f.includes('trigonometry') || f.includes('lpp')
      || f.includes('binomial') || f.includes('probability') || f.includes('pair_of_line')
      || f.includes('derivatives') || f.includes('differntial_equation')) {
    return 'maths';
  }
  if (f.includes('physics') || f.includes('ac.') || f.includes('electrostatics')
      || f.includes('ktg') || f.includes('current') || f.includes('dualnature')
      || f.includes('induction') || f.includes('fluids') || f.includes('magnetic')
      || f.includes('osciillations') || f.includes('rotational') || f.includes('atoms')
      || f.includes('superposition') || f.includes('thermodynaimics')) {
    return 'physics';
  }
  if (f.includes('chemistry') || f.includes('kinetics') || f.includes('thermodyanics')
      || f.includes('electrochemistry') || f.includes('equilibrium') || f.includes('solutions')
      || f.includes('organic') || f.includes('polymer') || f.includes('solid_state')) {
    return 'chemistry';
  }
  return 'maths'; // fallback
}

// ── SEO-friendly renaming ───────────────────────────────────────────
function buildSEOData(filename) {
  const ext = path.extname(filename);
  const raw = path.basename(filename, ext);

  // Strip "12th_" prefix and underscores
  let clean = raw.replace(/^12th_/, '').replace(/_/g, ' ').trim();

  // Title-case
  let title = clean.replace(/\b\w/g, c => c.toUpperCase());

  // Avoid "Formulas Formulas" — strip trailing "Formulas" then re-add once
  title = title.replace(/\s*Formulas$/i, '').trim();
  title = `12th ${title} Formulas`;

  // SEO slug
  const slug = clean.replace(/\s+/g, '-').toLowerCase();
  const seoFilename = `${slug}-class-12-maharashtra${ext}`;

  const subject = detectSubject(filename);
  const subjectCap = subject.charAt(0).toUpperCase() + subject.slice(1);

  const description = `Complete and important ${clean.toLowerCase()} formulas for Class 12 Maharashtra Board HSC students.`;

  const colorMap = {
    'Maths':     "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20",
    'Physics':   "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20",
    'Chemistry': "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20"
  };

  return {
    original: filename,
    seoFilename,
    title,
    subject,
    subjectCap,
    description,
    cdnPath: `formulas/${subject}/${seoFilename}`,
    color: colorMap[subjectCap] || colorMap['Maths']
  };
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  const allData = [];

  for (const file of files) {
    const info = buildSEOData(file);
    allData.push(info);

    // Upload to ImageKit
    const filePath = path.join(inputDir, file);
    const fileContent = fs.readFileSync(filePath);

    console.log(`Uploading [${info.subject}] ${file} -> ${info.seoFilename}`);
    try {
      await imagekit.upload({
        file: fileContent,
        fileName: info.seoFilename,
        folder: `/formulas/${info.subject}`,
        useUniqueFileName: false
      });
      console.log(`  ✓ Success`);
    } catch (err) {
      console.error(`  ✗ Error:`, err.message || err);
    }
  }

  // Save JSON for page generation
  const jsonData = allData.map(d => ({
    title: d.title,
    category: d.subjectCap,
    images: [d.cdnPath],
    description: d.description,
    color: d.color
  }));

  const outPath = path.join(__dirname, 'formulasData.json');
  fs.writeFileSync(outPath, JSON.stringify(jsonData, null, 2));
  console.log(`\n✅ All ${allData.length} images uploaded. Data saved to ${outPath}`);
}

main();
