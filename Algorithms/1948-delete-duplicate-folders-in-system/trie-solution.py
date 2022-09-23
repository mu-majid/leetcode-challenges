from ast import List
from collections import defaultdict


class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.hash, self.isDeleted = '', False

    def add(self, path, idx=0):
        if idx != len(path):
            self.children[path[idx]].add(path, idx + 1)

    def calculateHash(self, hashes, nodeName='root'):
        for childNodeName, childNode in sorted(self.children.items()):
            self.hash += f'{childNode.calculateHash(hashes, childNodeName)}+'
        if self.hash:
            hashes[self.hash].append(self)
        return f'{nodeName}({self.hash})'

    def toList(self, lst, path=[]):
        for childNodeName, childNode in self.children.items():
            if not childNode.isDeleted:
                lst.append(path + [childNodeName])
                childNode.toList(lst, path + [childNodeName])


class Solution:
    def deleteDuplicateFolder(self, paths: List[List[str]]) -> List[List[str]]:
        root, hashToNodes, res = TrieNode(), defaultdict(list), []
        for path in paths:
            root.add(path)
        root.calculateHash(hashToNodes)
        for nodes in hashToNodes.values():
            if len(nodes) > 1:
                for node in nodes:
                    node.isDeleted = True
        root.toList(res)
        return res
