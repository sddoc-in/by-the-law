import React from "react";
import ExcelContextInterface from "../interface/ExcelContext";
import { AppContext } from "./Context";


export const ExcelContext = React.createContext<ExcelContextInterface>(
  {} as ExcelContextInterface
);

export default function ExcelProvider({ children }: any) {

  const {setLoading} = React.useContext(AppContext);

  const [url, setUrl] = React.useState<string>("");

  const [fileData, setFileData] = React.useState<any>([]);
  const [mainData, setMainData] = React.useState<any>([]); 
  const [header, setHeader] = React.useState<any>([]);
  const [selected, setSelected] = React.useState<any>([]);
  const [columnsHidden, setColumnsHidden] = React.useState<number[]>([]);

  const [likesRange, setLikesRange] = React.useState<number[]>([0, 0]);
  const [reachRange, setReachRange] = React.useState<number[]>([0, 0]);

  function changeFileData(data:any) {
    setMainData(data);
    setFileData(data);
  }

  function clearAll(){
    setFileData(mainData);
    setLikesRange([0,0]);
    setReachRange([0,0]);
  }

  

  /**
   * Download as Excel
   * @param selectedData 
   * @param columnsHiddenData 
   * @param headerData 
   */
  // function downloadAsExcel(selectedData:any = selected,columnsHiddenData:any = columnsHidden,headerData:any=header) {
  //   setLoading(true);
  //   let data = selectedData.map((item: any) => {
  //     item = item.map((item: any, idx: number) => {
  //       if (columnsHiddenData.includes(idx)) return null;
  //       // slice to 300 char description text
  //       if(idx === 4) return item.length > 600 ? item.slice(0,600) : item;
  //       return item;
  //     });
  //     return item;
  //   });

  //   const dummyHeader = headerData.map((item: any, idx: number) => {
  //     if (columnsHiddenData.includes(idx)) return null;
  //     return item;
  //   });
  //   data.unshift(dummyHeader);

  //   const ws = XLSX.utils.aoa_to_sheet(data);
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
  //   const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
  //   const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
  //   const url = window.URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.setAttribute("download", "selected.xlsx");
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   setLoading(false);
  // }

  /**
   * Download as CSV
   * @param selectedData 
   * @param columnsHiddenData 
   * @param headerData 
   */
  function downloadAsCsv(selectedData:any = selected,columnsHiddenData:any = columnsHidden,headerData:any=header) {
   
    setLoading(true);
    const data = selectedData.map((item: any) => {
      item = item.map((item: any, idx: number) => {
        if (columnsHiddenData.includes(idx)) return null;
        if(idx === 4) return item.length > 600 ? item.slice(0,600) : item;
        return item;
      });
      return item.join(",");
    });
    const dummyHeader = headerData.map((item: any, idx: number) => {
      if (columnsHiddenData.includes(idx)) return null;
      return item;
    });
    data.unshift(dummyHeader.join(","));
    const csv = data.join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "selected.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setLoading(false);
  }

 

  return (
    <ExcelContext.Provider
      value={{
        fileData,
        setFileData,
        header,
        setHeader,
        selected,
        setSelected,
        // downloadAsExcel,
        downloadAsCsv,
        columnsHidden,
        setColumnsHidden,
        url,
        setUrl,
        likesRange,
        setLikesRange,
        reachRange,
        setReachRange,
        changeFileData,
        clearAll,
        mainData,
        setMainData
      }}
    >
      {children}
    </ExcelContext.Provider>
  );
}
