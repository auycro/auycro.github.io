```
git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git
cd vision/cloud-client/quickstart/
cat quickstart.py
gcloud iam service-accounts create {bar} --project {foo}
gcloud iam service-accounts keys create key.json --iam-account {bar}@{foo}.iam.gserviceaccount.com
export GOOGLE_APPLICATION_CREDENTIALS=key.json
python quickstart.py
pip install --upgrade google-cloud-vision
python quickstart.py
```
