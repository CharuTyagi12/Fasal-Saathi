# फसल साथी (Fasal Saathi) - Crop Yield Predictor

Indian farmers ke liye mobile-first, Hindi-first crop yield prediction web app.
Frontend: React + Vite + Tailwind v4. Backend: Flask + Random Forest model.

## Flow (3 steps)
1. **जगह** - State aur District
2. **फसल** - Crop (season auto-select)
3. **खेत** - Area (acre / hectare)

Result page: yield (quintal), district average se comparison, 3 reasons, advice, confidence, WhatsApp share.

## Run karna

Backend (terminal 1):
```bash
cd fasal_backend
pip install -r requirements.txt
python app.py        # http://127.0.0.1:5001
```

Frontend (terminal 2):
```bash
npm install
npm run dev          # http://localhost:3000  (/api -> backend proxy)
```

Build / typecheck: `npm run build`, `npm run lint`

## Structure
```
src/            React app (components, translations hi/en, data/options.ts, api/predict.ts)
public/images/  Crop, hero aur section images (.webp)
fasal_backend/
  app.py                    Flask API (/api/predict, /api/model-info, /api/health)
  crop_model.pkl            Trained RandomForestRegressor
  model_columns.pkl         Model ke feature columns
  crop_production.csv       Dataset (district-wise historical yield)
  accuracy_stats.json       Hold-out accuracy numbers
  model_view.csv            Feature importance (report/viva ke liye)
  ml/compute_accuracy.py    accuracy_stats.json dobara banane ki script
```
