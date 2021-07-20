module.exports = {
    remainingDays(job){
        // calculo de tempo
       
       const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
   
       const createdDate = new Date(job.created_at)
       const dueDay = createdDate.getDate() + Number(remainingDays)
       const dueDateInMs = createdDate.setDate(dueDay)
   
       const timeDiffInMs = dueDateInMs - Date.now()
   
        // transformar milisegundos em dias
       const dayInMs = 1000 * 60 * 60 * 24
       const dayDiff = Math.floor( timeDiffInMs / dayInMs )
   
       // retam x dias    
       return dayDiff
       
   },
   calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}