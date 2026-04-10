# Github 배포

.sh 파일들은 `/Users/andrew/Thairon/govrfp-alerts/` 디렉토리에 있습니다:

**배포 관련**:

- **deploy-to-server.sh** - 새로 만든 자동 배포 스크립트 (가장 중요)
- deploy.sh - 이전 배포 스크립트

**도메인 설정 관련**:

- setup-mybidwise-domain.sh - mybidwise.com 도메인 설정
- setup-domain.sh - 일반 도메인 설정
- run-setup.sh - 설정 실행 스크립트
- run-setup-simple.sh - 간단한 설정 실행

앞으로 서버에 배포할 때는 `./deploy-to-server.sh` 스크립트를 사용하시면 됩니다.