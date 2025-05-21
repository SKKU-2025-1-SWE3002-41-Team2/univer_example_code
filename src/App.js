import React, { useEffect, useRef } from 'react';
import { createUniver, defaultTheme, LocaleType, merge } from '@univerjs/presets';
import { UniverSheetsCorePreset } from '@univerjs/presets/preset-sheets-core';
import sheetsCoreEnUS from '@univerjs/presets/preset-sheets-core/locales/en-US';

// 스타일 파일 가져오기
import '@univerjs/presets/lib/styles/preset-sheets-core.css';

function App() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // container ID를 가진 요소가 있을 때 Univer 인스턴스 생성
    const containerId = 'univer-container';
    const { univerAPI } = createUniver({
      locale: LocaleType.EN_US,
      locales: {
        [LocaleType.EN_US]: merge({}, sheetsCoreEnUS),
      },
      theme: defaultTheme,
      presets: [
        UniverSheetsCorePreset({
          container: containerId,
        }),
      ],
    });
    
    // 새 스프레드시트 생성
    univerAPI.createUniverSheet({});
    
    // 컴포넌트 언마운트 시 클린업 로직 (필요시)
    return () => {
      // 클린업 로직 (공식 API가 있다면 추가)
    };
  }, []);
  
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div id = "testblank" style={{width : "30%",height:"100%"}}></div>
      <div id="univer-container" ref={containerRef} style={{ width: '70%', height: '100%' }}></div>
    </div>
  );
}

export default App;