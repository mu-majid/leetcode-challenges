var sortedListToBST = function(head) {
	const arr = [];
  //convert ll to arr
	while(head){
		arr.push(head.val);
		head = head.next;
	};

	function bst(arr,left,right){
		if(left > right) return null;
		const mid = Math.floor((left+right)/2);
		const tree = new TreeNode(arr[mid]);
		tree.left = bst(arr,left,mid-1);
		tree.right = bst(arr,mid+1,right);
		return tree;
	}

	return bst(arr,0,arr.length-1);
};
