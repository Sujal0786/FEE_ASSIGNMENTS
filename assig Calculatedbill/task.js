// Sample data (you would replace these with your actual data)
const items = [
    { id: "item1", itemName: "Butter Roti", rate: 20, taxes: [{ name: "Service Charge", rate: 10, isInPercent: 'Y' }], category: { categoryId: "C2" } },
    { id: "item2", itemName: "Paneer Butter Masala", rate: 100, taxes: [{ name: "Service Charge", rate: 10, isInPercent: 'Y' }], category: { categoryId: "C1" } }
  ];
  
  const categories = [
    { id: "C1", categoryName: "Platters", superCategory: { superCategoryName: "South Indian", id: "SC1" } },
    { id: "C2", categoryName: "Main Course", superCategory: { superCategoryName: "North Indian", id: "SC2" } }
  ];
  
  const bill = {
    id: "B1",
    billNumber: 1,
    opentime: "06 Nov 2020 14:19",
    customerName: "CodeQuotient",
    billItems: [
      { id: "item2", quantity: 3, discount: { rate: 10, isInPercent: 'Y' } }
    ]
  };
  
  // Task 1: Create function to return simplified JSON structure
  function getSimplifiedBill(bill) {
    return {
      id: bill.id,
      billNumber: bill.billNumber,
      opentime: bill.opentime,
      customerName: bill.customerName,
      billItems: bill.billItems.map(billItem => {
        const item = items.find(i => i.id === billItem.id);
        return {
          id: billItem.id,
          name: item ? item.itemName : '',
          quantity: billItem.quantity
        };
      })
    };
  }
  
  // Example usage:
  console.log(JSON.stringify(getSimplifiedBill(bill), null, 2));
  